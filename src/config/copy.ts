export const HOME_TITLE = 'RamosMap – Baumkataster & Baumkontrolle App für Baumpfleger';
export const HOME_DESCRIPTION =
  'RamosMap für Baumpfleger, Baumkontrolleure, Kommunen und Dienstleister: Baumkataster und Baumkontrolle auf der Karte, Maßnahmen im Feld, Import und Export. Derzeit geschlossene Testphase.';

export const FEATURE_CARDS = [
  {
    icon: 'map' as const,
    title: 'Baumkataster auf der Karte',
    hl: 'Baumkataster',
    body: 'RamosMap zeigt Ihren Baumbestand als Baumkataster auf der Karte.',
  },
  {
    icon: 'check' as const,
    title: 'Geführte Baumkontrolle',
    hl: 'Baumkontrolle',
    body: 'RamosMap führt durch die Baumkontrolle am Bestand im Feld.',
  },
  {
    icon: 'marker' as const,
    title: 'Maßnahmen im Feld erfassen',
    hl: 'Maßnahmen',
    body: 'Kontrolle und Maßnahmen dokumentieren Sie direkt am Baum.',
  },
  {
    icon: 'import' as const,
    title: 'Import aus Excel, CSV und GeoPackage',
    hl: 'Import',
    body: 'Getestet sind Excel, CSV und GeoPackage, aus gängigen Katasterprogrammen. So sehen Sie Bäume gemeinsam mit den zugehörigen Maßnahmen.',
  },
  {
    icon: 'marker' as const,
    title: 'Bäume suchen',
    hl: 'suchen',
    body: 'Im Bestand finden Sie einzelne Bäume über die Suche.',
  },
  {
    icon: 'filter' as const,
    title: 'Maßnahmen filtern',
    hl: 'filtern',
    body: 'Maßnahmen lassen sich filtern, damit offene und erledigte Punkte im Überblick bleiben.',
  },
  {
    icon: 'export' as const,
    title: 'Export nach Excel und PDF',
    hl: 'Export',
    body: 'Vorerst exportiert RamosMap nach Excel und PDF. Weitere Formate sind geplant.',
  },
  {
    icon: 'offline' as const,
    title: 'Offline-Karten für Bayern und NRW',
    hl: 'Offline-Karten',
    body: 'Für Bayern und Nordrhein-Westfalen stehen Offline-Karten und Luftbilder zur Verfügung.',
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
    body: 'RamosMap übernimmt Bäume und zugehörige Maßnahmen aus Excel, CSV oder GeoPackage, aus gängigen Katasterprogrammen.',
  },
  {
    n: '2',
    title: 'Kontrolle und Maßnahmen im Feld',
    body: 'RamosMap führt durch die Baumkontrolle. Maßnahmen erfassen Sie direkt am Baum. Über Suche und Filter behalten Sie den Überblick.',
  },
  {
    n: '3',
    title: 'Export und Bestand aktuell halten',
    body: 'Vorerst exportiert RamosMap nach Excel und PDF. Über Teameinladungen bleibt der Bestand für die beteiligten Personen aktuell.',
  },
] as const;

export const SUPPORT_EMAIL = 'info@ramosmap.com';
export const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;
export const FOOTER_SUPPORT_HTML = `Support: <a href="${SUPPORT_MAILTO}">${SUPPORT_EMAIL}</a>`;
export const CTA_SUPPORT_HTML = `Support: Schreiben Sie an <a href="${SUPPORT_MAILTO}">${SUPPORT_EMAIL}</a>.`;

export const FAQ_PAGE_DESCRIPTION =
  'Antworten zu Testphase, Import, Export, Maßnahmen, Offline-Karten, Datenschutz, Preisen, Teamarbeit und Support bei RamosMap.';
export const FAQ_PAGE_LEAD =
  'Antworten zu Testphase, Formaten, Maßnahmen, Offline-Karten, Datenschutz, Preisen, Teamarbeit und Support.';

export type FaqItem = { q: string; a: string };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Wie erhalte ich Zugang zu RamosMap?',
    a: 'RamosMap befindet sich in einer geschlossenen Testphase. Nur Fredrik und eingeladene Tester nutzen die App. Den Zugang zur Testphase können Sie per E-Mail an <a href="mailto:info@ramosmap.com?subject=Zugang%20Testphase%20RamosMap">info@ramosmap.com</a> anfragen.',
  },
  {
    q: 'Wofür ist RamosMap gedacht?',
    a: 'RamosMap dient Baumkataster und Baumkontrolle: Bestand auf der Karte, geführte Kontrolle, Maßnahmen im Feld, Suche und Filter sowie Import und Export.',
  },
  {
    q: 'Welche Formate kann RamosMap importieren?',
    a: 'Getestet sind Excel, CSV und GeoPackage, aus gängigen Katasterprogrammen. Nach dem Import sehen Sie Bäume gemeinsam mit den zugehörigen Maßnahmen.',
  },
  {
    q: 'Welche Formate kann RamosMap exportieren?',
    a: 'Vorerst exportiert RamosMap nach Excel und PDF. Weitere Formate sind geplant.',
  },
  {
    q: 'Kann ich Maßnahmen im Feld erfassen und filtern?',
    a: 'Ja. Kontrolle und Maßnahmen dokumentieren Sie direkt am Baum. Maßnahmen lassen sich filtern. Einzelne Bäume finden Sie über die Suche.',
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
    a: 'Laden Sie Kolleginnen und Kollegen in Ihr Team ein. RamosMap unterstützt Teameinladungen.',
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
