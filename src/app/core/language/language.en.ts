import { Language } from './language.types';

export const EN: Language = {
  navHome: 'Home',
  navWork: 'Work',
  navAbout: 'About',
  navSkills: 'Technologies',
  navContact: 'Contact',
  navImprint: 'Legal notice',
  navPrivacy: 'Privacy',

  kicker: 'Web Developer · Frontend & Angular',
  heroTitle: 'Applications that stay maintainable for years.',
  heroText:
    'For three years I have been building web interfaces for business applications – today mainly with Angular and TypeScript. This page shows a selection of the projects I was responsible for.',
  ctaPrimary: 'View projects',
  ctaSecondary: 'Get in touch',

  workTitle: 'Selected work',
  workMeta: '2023 – 2026',

  aboutTitle: 'About',
  about1:
    'I build front ends for applications many people use every day: portals, dashboards, internal tools. My focus is clear architecture, dependable state management and accessibility.',
  about2:
    'In projects I work closely with business owners, design and backend teams, document decisions, and hand over code a team can keep working with.',

  skillsTitle: 'Technologies',

  contactTitle: "Let's talk about your project.",
  contactText: 'I welcome enquiries about permanent roles, freelance projects, or simply a professional exchange.',
  contactPageTitle: 'Send me a message.',
  contactPageText:
    'For enquiries about permanent roles, freelance projects or a professional exchange. I usually reply within two working days.',

  fName: 'Name',
  fMail: 'Email',
  fSubject: 'Subject',
  fSubjectHint: 'Please select',
  fMsg: 'Message',
  fSend: 'Send message',
  fPrivacy: 'I have read the privacy policy and agree that my details will be processed to handle this enquiry.',
  subjectOptions: [
    { value: 'festanstellung', label: 'Permanent role' },
    { value: 'freelance', label: 'Freelance project' },
    { value: 'austausch', label: 'Professional exchange' },
    { value: 'sonstiges', label: 'Other' },
  ],
  formSuccess: 'Thank you for your message! I usually reply within two working days.',
  formError: "That didn't work, sorry. Feel free to email me directly at kontakt@bandusch.com.",

  directTitle: 'Direct contact',
  availTitle: 'Availability',
  availText:
    'I am currently accepting project enquiries from the fourth quarter onwards. For permanent roles I am available to talk at any time.',
  availBadge: 'Open to enquiries',

  copyright: '© 2026 Andreas Bandusch',
  linkLive: 'View live',
  linkCode: 'Code on GitHub',

  privacyTitle: 'Privacy policy',
  privacyNote:
    'This policy covers bandusch.com and all subdomains hosting individual projects. Personal data is processed only where it is necessary to operate.',
  privacyNav: [
    'Controller',
    'Contact form',
    'Server log files',
    'Fonts and external content',
    'Project sites on subdomains',
    'Your rights',
    'Right to complain',
  ],
  privacyBlocks: [
    {
      h: 'Controller',
      mail: 'kontakt@bandusch.com',
      mailAfter: true,
      lines: [
        'Responsible for the data processing on this site:',
        'Andreas Bandusch',
        'Kupferdreher Markt 9',
        '45257 Essen',
        'Germany',
        'For any question about data protection, write to:',
      ],
    },
    {
      h: 'Contact form',
      lines: [
        'If you use the contact form, I process your name, email address, chosen subject and message in order to answer your enquiry. The legal basis is your consent under Art. 6(1)(a) GDPR and my legitimate interest in replying under (f).',
        'The data is not passed on to third parties and is deleted once the enquiry is closed, unless statutory retention periods apply. You can withdraw your consent at any time.',
      ],
    },
    {
      h: 'Server log files',
      lines: [
        'When the site is accessed, the server automatically records technical data: IP address, time of access, file requested, volume of data transferred, browser type and operating system. This data is required for secure and stable operation; the legal basis is Art. 6(1)(f) GDPR.',
        'It is not combined with other data and the logs are deleted automatically after a short period.',
      ],
    },
    {
      h: 'Fonts and external content',
      lines: [
        'The fonts used are served locally from my own server. No connection to external providers is established and no data is transmitted to third parties.',
        'This site uses no analytics or advertising cookies and embeds no tracking services.',
      ],
    },
    {
      h: 'Project sites on subdomains',
      lines: [
        'The individual projects are hosted on their own subdomains of bandusch.com. The same information on controller, server log files and data subject rights applies to them as to the main site.',
        'Some projects call external services from your browser. Your IP address is transmitted to the respective provider as a technical necessity, so that the response can reach you. The legal basis is Art. 6(1)(f) GDPR.',
        'Pokédex retrieves data from the PokéAPI (pokeapi.co). Join uses Google Firebase for data storage and sign-in, which may involve processing on Google servers. Further details are available in those providers own privacy notices. El Pollo Loco runs entirely in the browser and calls no external services.',
        'DABubble runs on a server operated by me in Germany and is set up as a demonstration with a guest account and prepared sample data. A technically necessary token is stored in your browser for sign-in. Any details you enter there are processed solely to operate the application and deleted on request; a separate privacy policy applies to that application.',
      ],
    },
    {
      h: 'Your rights',
      lines: [
        'You have the right to obtain information about the data stored about you, to have inaccurate data corrected, to erasure, to restriction of processing, to data portability and to object to processing.',
        'A message to the address above is enough to exercise these rights.',
      ],
    },
    {
      h: 'Right to complain',
      lines: [
        'You may lodge a complaint with a data protection supervisory authority. The competent authority here is the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia, Kavalleriestraße 2–4, 40213 Düsseldorf, Germany.',
      ],
    },
  ],

  imprintTitle: 'Legal notice',
  imprintNote: 'Information pursuant to § 5 DDG (German Digital Services Act).',
  imprintNav: ['Provider', 'Contact', 'Liability for content', 'Liability for links', 'Copyright'],
  imprintBlocks: [
    { h: 'Provider', lines: ['Andreas Bandusch', 'Kupferdreher Markt 9', '45257 Essen', 'Germany'] },
    { h: 'Contact', mail: 'kontakt@bandusch.com', lines: ['Or use the contact form on this site.'] },
    {
      h: 'Liability for content',
      lines: [
        'As a service provider I am responsible for my own content on these pages under general law. I am not obliged to monitor third-party information that is transmitted or stored.',
        'Obligations to remove or block the use of information under general law remain unaffected. Liability in this respect is only possible from the point at which a concrete infringement becomes known.',
      ],
    },
    {
      h: 'Liability for links',
      lines: [
        'This site contains links to external third-party websites whose content is outside my control. I cannot accept any responsibility for that third-party content. The respective provider or operator is always responsible for the content of linked pages.',
        'The linked pages were checked for possible legal infringements at the time of linking. Permanent monitoring of their content without concrete evidence of an infringement is not reasonable.',
      ],
    },
    {
      h: 'Copyright',
      lines: [
        'The content, texts and screenshots shown on these pages are protected by copyright. All projects shown are my own work.',
        'Downloads and copies of this page are permitted for private, non-commercial use only. Third-party names and trademarks, for example in screenshots, remain the property of their respective owners.',
      ],
    },
  ],

  contactRows: [
    { k: 'Email', v: 'kontakt@bandusch.com', href: 'mailto:kontakt@bandusch.com' },
    { k: 'LinkedIn', v: 'andreas-bandusch', href: 'https://www.linkedin.com/in/andreas-bandusch' },
    { k: 'GitHub', v: 'AndreasBandusch', href: 'https://github.com/AndreasBandusch' },
    { k: 'Location', v: 'Essen area, remote' },
  ],

  facts: [
    { k: 'Experience', v: '3+ years' },
    { k: 'Location', v: 'Essen area' },
    { k: 'Working mode', v: 'Remote' },
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
    { name: 'REST APIs / WebSockets' },
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
      imageAlt: 'DA-Bubble: channel view with message list and thread sidebar',
      tags: ['Angular 22 zoneless', 'Signals / RxJS', 'NestJS', 'PostgreSQL', 'Docker'],
      desc: 'A real-time team chat built single-handedly as a fullstack project: zoneless Angular with signals and RxJS, NestJS back end, PostgreSQL, messages over WebSockets. Runs containerised with Docker Compose on my own VPS.',
      liveUrl: '',
      codeUrl: 'https://github.com/AndreasBandusch/DA-Bubble',
    },
    {
      slug: 'join',
      title: 'Join',
      year: '2023',
      image: '/images/project-join.webp',
      imageAlt: 'Join: kanban board with task columns and drag and drop',
      tags: ['Angular', 'Firebase', 'RxJS'],
      desc: 'A kanban task manager built with Angular and Angular Material: tasks move by drag and drop, each with due date, priority and assigned contacts. Data and authentication run on Firebase.',
      liveUrl: '',
      codeUrl: 'https://github.com/AndreasBandusch/join',
    },
    {
      slug: 'pollo',
      title: 'El Pollo Loco',
      year: '2023',
      image: '/images/project-pollo.webp',
      imageAlt: 'El Pollo Loco: gameplay scene during the boss fight',
      tags: ['JavaScript', 'OOP', 'Canvas'],
      desc: 'A jump-and-run game written in object-oriented vanilla JavaScript, no framework. Characters and objects modelled as classes, rendering on Canvas with a custom game loop and collision detection.',
      liveUrl: '',
      codeUrl: 'https://github.com/AndreasBandusch/el-pollo-loco',
    },
    {
      slug: 'pokedex',
      title: 'Pokédex',
      year: '2023',
      image: '/images/project-pokedex.webp',
      imageAlt: 'Pokédex: card overview colour-coded by type',
      tags: ['JavaScript', 'REST API', 'CSS'],
      desc: 'A reference app on the public PokéAPI, built in vanilla JavaScript. Cards coloured by type, filterable by search, with a detail view for stats and abilities.',
      liveUrl: '',
      codeUrl: 'https://github.com/AndreasBandusch/pokedex',
    },
  ],
};
