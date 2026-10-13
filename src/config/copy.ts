export const HOME_TITLE = 'RamosMap – Baumkataster & Baumkontrolle App für Baumpfleger';
export const HOME_DESCRIPTION =
  'RamosMap für Baumpfleger, Baumkontrolleure, Kommunen und Dienstleister: Baumbestand auf der Karte und geführte Baumkontrolle. Derzeit geschlossene Testphase.';

export const FEATURE_CARDS = [
  {
    icon: 'map' as const,
    title: 'Baumbestand auf der Karte',
    hl: 'Baumbestand',
    body: 'RamosMap zeigt den Baumbestand auf einer Karte.',
  },
  {
    icon: 'check' as const,
    title: 'Geführte Baumkontrolle',
    hl: 'Baumkontrolle',
    body: 'RamosMap führt durch die Baumkontrolle am Bestand.',
  },
  {
    icon: 'import' as const,
    title: 'Import aus Excel, CSV und GeoPackage',
    hl: 'Import',
    body: 'Getestet sind Excel, CSV und GeoPackage, zum Beispiel aus Baumsicht.',
  },
  {
    icon: 'offline' as const,
    title: 'Offline-Karten für Bayern und NRW',
    hl: 'Offline-Karten',
    body: 'Für Bayern und Nordrhein-Westfalen stehen Offline-Karten und Luftbilder zur Verfügung.',
  },
  {
    icon: 'team' as const,
    title: 'Teameinladungen',
    hl: 'Team',
    body: 'RamosMap unterstützt Einladungen ins Team.',
  },
  {
    icon: 'shield' as const,
    title: 'Daten in der EU, Absturzberichte abschaltbar',
    hl: 'EU',
    body: 'Projektdaten speichert RamosMap in Rechenzentren in der EU. Die Anmeldung läuft über Google Firebase. Absturzberichte können Sie abschalten. Hinweise stehen in der <a href="/datenschutz-app/">Datenschutzerklärung der App</a>.',
  },
];

export const HOME_STEPS = [
  {
    n: '1',
    title: 'Import',
    body: 'RamosMap übernimmt den Bestand aus Excel, CSV oder GeoPackage, zum Beispiel aus Baumsicht.',
  },
  {
    n: '2',
    title: 'Kontrolle im Feld',
    body: 'RamosMap führt durch die Baumkontrolle. Der Bestand liegt auf der Karte.',
  },
  {
    n: '3',
    title: 'Bestand im Team aktuell halten',
    body: 'Über Teameinladungen bleibt der Bestand für die beteiligten Personen aktuell.',
  },
] as const;

export const SUPPORT_EMAIL = 'fredrik@ramosmap.com';
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;
export const FOOTER_SUPPORT_HTML = `Support: <a href="${SUPPORT_MAILTO}">${SUPPORT_EMAIL}</a>`;
export const CTA_SUPPORT_HTML = `Support: Schreiben Sie an <a href="${SUPPORT_MAILTO}">${SUPPORT_EMAIL}</a>.`;

export const FAQ_PAGE_DESCRIPTION =
  'Antworten zu Testphase, Importformaten, Offline-Karten, Datenschutz, Preisen, Teamarbeit und Support bei RamosMap.';
export const FAQ_PAGE_LEAD =
  'Antworten zu Testphase, Formaten, Offline-Karten, Datenschutz, Preisen, Teamarbeit und Support.';

export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Wie erhalte ich Zugang zu RamosMap?',
    a: 'RamosMap befindet sich in einer geschlossenen Testphase. Nur Fredrik und eingeladene Tester nutzen die App. Den Zugang zur Testphase können Sie per E-Mail an <a href="mailto:fredrik@ramosmap.com?subject=Zugang%20Testphase%20RamosMap">fredrik@ramosmap.com</a> anfragen.',
  },
  {
    q: 'Welche Formate kann RamosMap importieren?',
    a: 'Getestet sind Excel, CSV und GeoPackage, zum Beispiel aus Baumsicht.',
  },
  {
    q: 'Gibt es Offline-Karten?',
    a: 'Für Bayern und Nordrhein-Westfalen stehen Offline-Karten und Luftbilder zur Verfügung.',
  },
  {
    q: 'Wie steht es um Datenschutz und Hosting?',
    a: 'Projektdaten speichert RamosMap in Rechenzentren in der EU. Die Anmeldung läuft über Google Firebase. Absturzberichte können Sie abschalten. Einzelheiten stehen in der <a href="/datenschutz-app/">Datenschutzerklärung der App</a>.',
  },
  {
    q: 'Was kostet RamosMap?',
    a: 'Die Preise stehen noch nicht fest. RamosMap befindet sich in einer geschlossenen Testphase.',
  },
  {
    q: 'Können mehrere Personen in RamosMap arbeiten?',
    a: 'RamosMap unterstützt Teameinladungen.',
  },
  {
    q: 'Wie erreiche ich den Support?',
    a: `Schreiben Sie an <a href="${SUPPORT_MAILTO}">${SUPPORT_EMAIL}</a>.`,
  },
];

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '');
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.a),
      },
    })),
  };
}
