import { Language } from './language.types';

export const DE: Language = {
  navHome: 'Start',
  navWork: 'Projekte',
  navAbout: 'Über mich',
  navSkills: 'Technologien',
  navContact: 'Kontakt',
  navImprint: 'Impressum',
  navPrivacy: 'Datenschutz',

  kicker: 'Webentwickler · Frontend & Angular',
  heroTitle: 'Anwendungen, die auch nach Jahren wartbar bleiben.',
  heroText:
    'Seit drei Jahren baue ich Weboberflächen für Fachanwendungen – heute vor allem mit Angular und TypeScript. Auf dieser Seite finden Sie eine Auswahl der Projekte, für die ich verantwortlich war.',
  heroTextShort:
    'Seit drei Jahren Weboberflächen für Fachanwendungen – heute vor allem mit Angular und TypeScript.',
  ctaPrimary: 'Projekte ansehen',
  ctaSecondary: 'Kontakt aufnehmen',

  workTitle: 'Ausgewählte Projekte',
  workMeta: '2023 – 2026',

  aboutTitle: 'Über mich',
  about1:
    'Ich entwickle Frontends für Anwendungen, die täglich von vielen Menschen benutzt werden: Portale, Dashboards, interne Werkzeuge. Mein Schwerpunkt liegt auf klarer Architektur, verlässlicher Zustandsverwaltung und Barrierefreiheit.',
  about2:
    'In Projekten arbeite ich eng mit Fachbereich, Design und Backend zusammen, dokumentiere Entscheidungen und übergebe Code, mit dem ein Team weiterarbeiten kann.',

  skillsTitle: 'Technologien',

  contactTitle: 'Sprechen wir über Ihr Projekt.',
  contactText:
    'Ich freue mich über Anfragen zu Festanstellung, Freelance-Projekten oder einem fachlichen Austausch.',
  contactPageTitle: 'Schreiben Sie mir.',
  contactPageText:
    'Für Anfragen zu Festanstellung, Freelance-Projekten oder einem fachlichen Austausch. Ich antworte in der Regel innerhalb von zwei Werktagen.',

  fName: 'Name',
  fMail: 'E-Mail',
  fSubject: 'Anliegen',
  fSubjectHint: 'Bitte auswählen',
  fMsg: 'Nachricht',
  fSend: 'Nachricht senden',
  fPrivacy:
    'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.',
  subjectOptions: [
    { value: 'festanstellung', label: 'Festanstellung' },
    { value: 'freelance', label: 'Freelance-Projekt' },
    { value: 'austausch', label: 'Fachlicher Austausch' },
    { value: 'sonstiges', label: 'Sonstiges' },
  ],
  formSuccess: 'Danke für Ihre Nachricht! Ich melde mich in der Regel innerhalb von zwei Werktagen.',
  formError: 'Das hat leider nicht geklappt. Schreiben Sie mir gerne direkt an kontakt@bandusch.com.',

  directTitle: 'Direkter Kontakt',
  availTitle: 'Verfügbarkeit',
  availText:
    'Aktuell nehme ich Anfragen für Projekte ab dem vierten Quartal an. Für Festanstellungen bin ich jederzeit ansprechbar.',
  availBadge: 'Offen für Anfragen',

  copyright: '© 2026 Andreas Bandusch',
  linkLive: 'Live ansehen',
  linkCode: 'Code auf GitHub',

  privacyTitle: 'Datenschutzerklärung',
  privacyNote:
    'Diese Erklärung gilt für bandusch.com und alle Subdomains, auf denen einzelne Projekte erreichbar sind. Personenbezogene Daten werden nur dort verarbeitet, wo es für den Betrieb nötig ist.',
  privacyNav: [
    'Verantwortlicher',
    'Kontaktformular',
    'Server-Logfiles',
    'Schriften und externe Inhalte',
    'Projektseiten auf Subdomains',
    'Ihre Rechte',
    'Beschwerderecht',
  ],
  privacyBlocks: [
    {
      h: 'Verantwortlicher',
      mail: 'kontakt@bandusch.com',
      mailAfter: true,
      lines: [
        'Verantwortlich für die Datenverarbeitung auf dieser Seite:',
        'Andreas Bandusch',
        'Kupferdreher Markt 9',
        '45257 Essen',
        'Für Fragen zum Datenschutz genügt eine Nachricht an:',
      ],
    },
    {
      h: 'Kontaktformular',
      lines: [
        'Wenn Sie das Kontaktformular nutzen, verarbeite ich Ihren Namen, Ihre E-Mail-Adresse, das gewählte Anliegen und Ihre Nachricht, um die Anfrage zu beantworten. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO sowie mein berechtigtes Interesse an der Beantwortung nach lit. f.',
        'Die Daten werden nicht an Dritte weitergegeben und gelöscht, sobald die Anfrage abgeschlossen ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen. Eine erteilte Einwilligung können Sie jederzeit widerrufen.',
      ],
    },
    {
      h: 'Server-Logfiles',
      lines: [
        'Beim Aufruf der Seite erfasst der Server automatisch technische Daten: IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Datei, übertragene Datenmenge, Browsertyp und Betriebssystem. Diese Daten sind für den sicheren und stabilen Betrieb erforderlich, Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
        'Eine Zusammenführung mit anderen Daten findet nicht statt. Die Logs werden nach kurzer Zeit automatisch gelöscht.',
      ],
    },
    {
      h: 'Schriften und externe Inhalte',
      lines: [
        'Die verwendeten Schriften werden lokal vom eigenen Server geladen. Es besteht dabei keine Verbindung zu externen Anbietern und es werden keine Daten an Dritte übertragen.',
        'Diese Seite verwendet keine Cookies zu Analyse- oder Werbezwecken und bindet keine Tracking-Dienste ein.',
      ],
    },
    {
      h: 'Projektseiten auf Subdomains',
      lines: [
        'Die einzelnen Projekte sind unter eigenen Subdomains von bandusch.com erreichbar. Für sie gelten dieselben Angaben zu Verantwortlichem, Server-Logfiles und Betroffenenrechten wie für die Hauptseite.',
        'Einzelne Projekte rufen beim Aufruf im Browser externe Dienste auf. Dabei wird Ihre IP-Adresse technisch notwendig an den jeweiligen Anbieter übertragen, damit die Antwort bei Ihnen ankommen kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
        'Pokédex bezieht Daten von der PokéAPI (pokeapi.co). Join nutzt Google Firebase für Datenhaltung und Anmeldung; dabei können Daten auf Servern von Google verarbeitet werden. Weitere Angaben finden Sie in den Datenschutzhinweisen der jeweiligen Anbieter. El Pollo Loco läuft vollständig im Browser und ruft keine externen Dienste auf.',
        'DABubble läuft auf einem von mir betriebenen Server in Deutschland und ist als Demonstration mit einem Gastzugang und vorbereiteten Beispieldaten angelegt. Für die Anmeldung wird ein technisch notwendiges Token im Browser gespeichert. Eigene Angaben, die Sie dort eingeben, werden ausschließlich zum Betrieb der Anwendung verarbeitet und auf Anfrage gelöscht; für diese Anwendung gilt eine eigene Datenschutzerklärung.',
      ],
    },
    {
      h: 'Ihre Rechte',
      lines: [
        'Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten, auf Berichtigung unrichtiger Daten, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit und auf Widerspruch gegen die Verarbeitung.',
        'Für die Ausübung dieser Rechte genügt eine Nachricht an die oben genannte Adresse.',
      ],
    },
    {
      h: 'Beschwerderecht',
      lines: [
        'Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf.',
      ],
    },
  ],

  imprintTitle: 'Impressum',
  imprintNote: 'Angaben gemäß § 5 DDG.',
  imprintNav: ['Anbieter', 'Kontakt', 'Haftung für Inhalte', 'Haftung für Links', 'Urheberrecht'],
  imprintBlocks: [
    { h: 'Anbieter', lines: ['Andreas Bandusch', 'Kupferdreher Markt 9', '45257 Essen', 'Deutschland'] },
    { h: 'Kontakt', mail: 'kontakt@bandusch.com', lines: ['Oder über das Kontaktformular dieser Seite.'] },
    {
      h: 'Haftung für Inhalte',
      lines: [
        'Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht nicht.',
        'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.',
      ],
    },
    {
      h: 'Haftung für Links',
      lines: [
        'Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte kann ich keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.',
        'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Eine permanente inhaltliche Kontrolle ohne konkrete Anhaltspunkte einer Rechtsverletzung ist nicht zumutbar.',
      ],
    },
    {
      h: 'Urheberrecht',
      lines: [
        'Die auf diesen Seiten gezeigten Inhalte, Texte und Screenshots unterliegen dem Urheberrecht. Alle dargestellten Projekte sind eigene Arbeiten.',
        'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Namen und Marken Dritter, etwa in Screenshots, sind Eigentum der jeweiligen Rechteinhaber.',
      ],
    },
  ],

  contactRows: [
    { k: 'E-Mail', v: 'kontakt@bandusch.com', href: 'mailto:kontakt@bandusch.com' },
    { k: 'LinkedIn', v: 'andreas-bandusch', href: 'https://www.linkedin.com/in/andreas-bandusch' },
    { k: 'GitHub', v: 'AndreasBandusch', href: 'https://github.com/AndreasBandusch' },
    { k: 'Standort', v: 'Region Essen, remote' },
  ],

  facts: [
    { k: 'Erfahrung', v: '3+ Jahre' },
    { k: 'Standort', v: 'Region Essen' },
    { k: 'Arbeitsweise', v: 'Remote' },
  ],

  skills: [
    { name: 'Angular / TypeScript' },
    { name: 'JavaScript (ES6)' },
    { name: 'Angular Material' },
    { name: 'RxJS / Signals' },
    { name: 'HTML / CSS' },
    { name: 'SCSS / LESS' },
    { name: 'NestJS / Node.js' },
    { name: 'PostgreSQL' },
    { name: 'REST-APIs / WebSockets' },
    { name: 'Firebase' },
    { name: 'Docker' },
    { name: 'Git' },
  ],

  projects: [
    {
      slug: 'dabubble',
      title: 'DABubble',
      year: '2024 – 2026',
      image: '/images/project-dabubble.webp',
      imageAlt: 'DA-Bubble: Channel-Ansicht mit Nachrichtenliste und Thread-Seitenleiste',
      tags: ['Angular 22 zoneless', 'Signals / RxJS', 'NestJS', 'PostgreSQL', 'Docker'],
      desc: 'Team-Chat in Echtzeit, allein als Fullstack-Projekt umgesetzt: zoneless Angular mit Signals und RxJS, NestJS-Backend, PostgreSQL, Nachrichten über WebSockets. Läuft containerisiert über Docker Compose auf meinem eigenen VPS.',
      descShort:
        'Team-Chat in Echtzeit: zoneless Angular mit Signals, NestJS, PostgreSQL, WebSockets — containerisiert auf eigenem VPS.',
      liveUrl: '',
      codeUrl: 'https://github.com/AndreasBandusch/DA-Bubble',
    },
    {
      slug: 'join',
      title: 'Join',
      year: '2023',
      image: '/images/project-join.webp',
      imageAlt: 'Join: Kanban-Board mit Aufgaben-Spalten und Drag-&-Drop',
      tags: ['Angular', 'Firebase', 'RxJS'],
      desc: 'Kanban-Task-Manager mit Angular und Angular Material: Aufgaben per Drag & Drop verschieben, mit Fälligkeit, Priorität und zugewiesenen Kontakten. Daten und Authentifizierung laufen über Firebase.',
      descShort:
        'Kanban-Task-Manager mit Angular und Firebase: Drag & Drop, Kontaktverwaltung, Authentifizierung über Auth Guard.',
      liveUrl: '',
      codeUrl: 'https://github.com/AndreasBandusch/join',
    },
    {
      slug: 'pollo',
      title: 'El Pollo Loco',
      year: '2023',
      image: '/images/project-pollo.webp',
      imageAlt: 'El Pollo Loco: Spielszene mit Endboss-Kampf',
      tags: ['JavaScript', 'OOP', 'Canvas'],
      desc: 'Jump-and-Run-Spiel, objektorientiert in Vanilla JavaScript ohne Framework. Figuren und Objekte als eigene Klassen, Rendering über Canvas mit eigener Spielschleife und Kollisionsprüfung.',
      descShort: 'Jump-and-Run in Vanilla JavaScript, objektorientiert: eigene Spielschleife, Kollisionsprüfung, Endboss.',
      liveUrl: '',
      codeUrl: 'https://github.com/AndreasBandusch/el-pollo-loco',
    },
    {
      slug: 'pokedex',
      title: 'Pokédex',
      year: '2023',
      image: '/images/project-pokedex.webp',
      imageAlt: 'Pokédex: Kartenübersicht der Pokémon, nach Typ eingefärbt',
      tags: ['JavaScript', 'REST-API', 'CSS'],
      desc: 'Nachschlagewerk auf Basis der öffentlichen PokéAPI, umgesetzt in Vanilla JavaScript. Karten nach Typ eingefärbt, per Suche filterbar, mit Detailansicht für Werte und Fähigkeiten.',
      descShort: 'Nachschlagewerk auf Basis der PokéAPI: Kartenübersicht nach Typ, Suche, Detailansicht — Vanilla JavaScript.',
      liveUrl: '',
      codeUrl: 'https://github.com/AndreasBandusch/pokedex',
    },
  ],
};
