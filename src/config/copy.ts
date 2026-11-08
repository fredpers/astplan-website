export const HOME_TITLE = 'RamosMap – Baumkataster & Baumkontrolle App für Baumpfleger';
export const HOME_DESCRIPTION =
  'RamosMap ist webbasierte Software im Abo. Baumkataster und Baumkontrolle in einer App. Bestand führen oder importieren, Kontrollen und Maßnahmen im Feld. 7 Tage kostenlos testen, ohne Zahlungsdaten, endet automatisch.';

export const FEATURE_CARDS = [
  {
    icon: 'map' as const,
    title: 'Baumkataster: eigener Bestand oder Import',
    hl: 'Baumkataster',
    body: 'Sie können den Baumbestand direkt in RamosMap führen oder einen bestehenden Bestand importieren und auf der Karte nutzen.',
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
    body: 'Sie importieren Bäume einschließlich Maßnahmen direkt aus Excel, CSV und GeoPackage, z. B. aus gängigen Katasterprogrammen.',
  },
  {
    icon: 'marker' as const,
    title: 'Bäume suchen',
    hl: 'suchen',
    body: 'Im Bestand finden Sie Bäume nach Baumnummer und Baumart.',
  },
  {
    icon: 'filter' as const,
    title: 'Maßnahmen filtern',
    hl: 'filtern',
    body: 'Maßnahmen filtern Sie vor allem nach Maßnahme und Dringlichkeit.',
  },
  {
    icon: 'export' as const,
    title: 'Export nach Excel und PDF',
    hl: 'Export',
    body: 'Sie exportieren alle Bäume mit ihren Angaben als Excel-Datei und einzelne Bäume als Kontrollblatt im PDF-Format.',
  },
  {
    icon: 'offline' as const,
    title: 'Offline-Karten für Bayern und NRW',
    hl: 'Offline-Karten',
    body: 'Offline-Karten und Luftbilder stehen nur für Bayern und Nordrhein-Westfalen zur Verfügung.',
  },
  {
    icon: 'team' as const,
    title: 'Arbeit im Team',
    hl: 'Team',
    body: 'Laden Sie Kolleginnen und Kollegen per Einladung ein. Rollen: Mitarbeiter und Betrachter (Lesezugang).',
  },
  {
    icon: 'shield' as const,
    title: 'Daten in der EU, Absturzberichte abschaltbar',
    hl: 'EU',
    body: 'Projektdaten speichert RamosMap in Rechenzentren in der EU. Absturzberichte können Sie abschalten. Hinweise stehen in der <a href="/datenschutz-app/">Datenschutzerklärung der App</a>.',
  },
];

export const HOME_STEPS = [
  {
    n: '1',
    title: 'Bestand anlegen oder importieren',
    body: 'Führen Sie den Bestand in RamosMap oder importieren Sie Bäume und Maßnahmen aus Excel, CSV oder GeoPackage, z. B. aus gängigen Katasterprogrammen.',
  },
  {
    n: '2',
    title: 'Kontrolle und Maßnahmen im Feld',
    body: 'RamosMap führt durch die Baumkontrolle. Maßnahmen erfassen Sie direkt am Baum. Suche nach Baumnummer und Baumart sowie Filter nach Maßnahme und Dringlichkeit halten den Überblick.',
  },
  {
    n: '3',
    title: 'Export und Team',
    body: 'Exportieren Sie alle Bäume mit ihren Angaben als Excel-Datei und einzelne Bäume als Kontrollblatt im PDF-Format. Über Teameinladungen mit den Rollen Mitarbeiter und Betrachter bleibt der Bestand für die beteiligten Personen aktuell.',
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
    a: 'Registrieren Sie sich unter <a href="https://app.ramosmap.com" rel="noopener">app.ramosmap.com</a>. Sie können RamosMap 7 Tage kostenlos testen, ohne Zahlungsdaten. Die Testphase endet automatisch. Danach können Sie ein Abonnement abschließen.',
  },
  {
    q: 'Für wen ist RamosMap gedacht?',
    a: 'RamosMap richtet sich an Baumpfleger, Baumkontrolleure sowie Kommunen und Dienstleister.',
  },
  {
    q: 'Wofür ist RamosMap gedacht?',
    a: 'RamosMap ist Baumkataster und Baumkontrolle in einer App. Sie können den Bestand direkt in RamosMap führen oder einen bestehenden Bestand importieren und Kontrollen sowie Maßnahmen im Feld erledigen.',
  },
  {
    q: 'Welche Formate kann RamosMap importieren?',
    a: 'Sie importieren Bäume einschließlich Maßnahmen direkt aus Excel, CSV und GeoPackage, z. B. aus gängigen Katasterprogrammen.',
  },
  {
    q: 'Welche Formate kann RamosMap exportieren?',
    a: 'Sie exportieren alle Bäume mit ihren Angaben als Excel-Datei und einzelne Bäume als Kontrollblatt im PDF-Format.',
  },
  {
    q: 'Kann ich Maßnahmen im Feld erfassen und filtern?',
    a: 'Ja. Kontrolle und Maßnahmen dokumentieren Sie direkt am Baum. Maßnahmen filtern Sie vor allem nach Maßnahme und Dringlichkeit. Bäume finden Sie nach Baumnummer und Baumart.',
  },
  {
    q: 'Gibt es Offline-Karten?',
    a: 'Offline-Karten und Luftbilder stehen nur für Bayern und Nordrhein-Westfalen zur Verfügung.',
  },
  {
    q: 'Wie steht es um Datenschutz und Hosting?',
    a: 'Projektdaten speichert RamosMap in Rechenzentren in der EU. Die Anmeldung läuft über Google Firebase. Absturzberichte können Sie abschalten. Einzelheiten stehen in der <a href="/datenschutz-app/">Datenschutzerklärung der App</a>.',
  },
  {
    q: 'Was kostet RamosMap?',
    a: 'Solo kostet 20 EUR pro Monat oder 220 EUR pro Jahr, ein Team-Paket für 5 Mitarbeiter 49 EUR pro Monat oder 539 EUR pro Jahr, jeweils netto. Betrachter sind kostenlos. Alle Einzelheiten finden Sie auf der <a href="/preise">Preisseite</a>.',
  },
  {
    q: 'Können mehrere Personen in RamosMap arbeiten?',
    a: 'Laden Sie Kolleginnen und Kollegen per Einladung ein. Rollen: Mitarbeiter und Betrachter (Lesezugang).',
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
