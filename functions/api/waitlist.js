/**
 * AST-69 Phase A — Waitlist backend (Cloudflare Pages Function).
 * Validates payload, rejects honeypot spam, forwards to FormSubmit AJAX
 * so submissions land in Fredrik’s inbox without exposing the form ID client-side.
 */

const FORMSUBMIT_URL =
  'https://formsubmit.co/ajax/fredrik.persson92@live.se';

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: JSON_HEADERS,
  });
}

function isValidEmail(value) {
  if (typeof value !== 'string') return false;
  const email = value.trim();
  // Practical check: non-empty local@domain with a dot in the domain
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

async function parseBody(request) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return await request.json();
  }
  if (
    contentType.includes('application/x-www-form-urlencoded') ||
    contentType.includes('multipart/form-data')
  ) {
    const form = await request.formData();
    const data = {};
    for (const [key, value] of form.entries()) {
      data[key] = typeof value === 'string' ? value : String(value);
    }
    return data;
  }
  // Fallback: try JSON
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: 'POST, OPTIONS',
      },
    });
  }

  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  let data;
  try {
    data = await parseBody(request);
  } catch {
    return json({ ok: false, error: 'Ungültige Anfrage' }, 400);
  }

  if (!data || typeof data !== 'object') {
    return json({ ok: false, error: 'Ungültige Anfrage' }, 400);
  }

  const honeypot =
    (typeof data.website === 'string' && data.website) ||
    (typeof data.company_url === 'string' && data.company_url) ||
    '';

  // Honeypot filled → treat as spam: do not forward, fake success so bots move on
  if (String(honeypot).trim() !== '') {
    return json({ ok: true }, 200);
  }

  const email = typeof data.email === 'string' ? data.email.trim() : '';
  if (!isValidEmail(email)) {
    return json({ ok: false, error: 'Bitte eine gültige E-Mail angeben.' }, 400);
  }

  const name = typeof data.name === 'string' ? data.name.trim().slice(0, 200) : '';
  const firma = typeof data.firma === 'string' ? data.firma.trim().slice(0, 200) : '';
  const nutze = typeof data.nutze === 'string' ? data.nutze.trim().slice(0, 100) : '';

  const payload = {
    email,
    name: name || undefined,
    firma: firma || undefined,
    nutze: nutze || undefined,
    _subject: 'AstPlan Warteliste',
    _template: 'table',
    _replyto: email,
  };

  // Drop undefined keys for a clean FormSubmit body
  for (const key of Object.keys(payload)) {
    if (payload[key] === undefined) delete payload[key];
  }

  try {
    const upstream = await fetch(FORMSUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      let detail = '';
      try {
        const errBody = await upstream.json();
        detail = errBody?.message || errBody?.error || '';
      } catch {
        /* ignore */
      }
      console.error('FormSubmit error', upstream.status, detail);
      return json(
        { ok: false, error: 'Senden fehlgeschlagen. Bitte später erneut versuchen.' },
        502,
      );
    }

    return json({ ok: true }, 200);
  } catch (err) {
    console.error('Waitlist forward failed', err);
    return json(
      { ok: false, error: 'Senden fehlgeschlagen. Bitte später erneut versuchen.' },
      502,
    );
  }
}
