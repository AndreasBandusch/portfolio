export type LangCode = 'de' | 'en';

export interface ContentBlock {
  h: string;
  mail?: string;
  mailAfter?: boolean;
  lines: string[];
}

export interface ContactRow {
  k: string;
  v: string;
  href?: string;
}

export interface Fact {
  k: string;
  v: string;
}

export interface Skill {
  name: string;
}

export interface SubjectOption {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  image: string;
  imageAlt: string;
  tags: string[];
  desc: string;
  descShort: string;
  liveUrl: string;
  codeUrl: string;
}

export interface Language {
  navHome: string;
  navWork: string;
  navAbout: string;
  navSkills: string;
  navContact: string;
  navImprint: string;
  navPrivacy: string;

  kicker: string;
  heroTitle: string;
  heroText: string;
  heroTextShort: string;
  ctaPrimary: string;
  ctaSecondary: string;

  workTitle: string;
  workMeta: string;

  aboutTitle: string;
  about1: string;
  about2: string;

  skillsTitle: string;

  contactTitle: string;
  contactText: string;
  contactPageTitle: string;
  contactPageText: string;

  fName: string;
  fMail: string;
  fSubject: string;
  fSubjectHint: string;
  fMsg: string;
  fSend: string;
  fPrivacy: string;
  subjectOptions: SubjectOption[];
  formSuccess: string;
  formError: string;

  directTitle: string;
  availTitle: string;
  availText: string;
  availBadge: string;

  copyright: string;
  linkLive: string;
  linkCode: string;

  privacyTitle: string;
  privacyNote: string;
  privacyNav: string[];
  privacyBlocks: ContentBlock[];

  imprintTitle: string;
  imprintNote: string;
  imprintNav: string[];
  imprintBlocks: ContentBlock[];

  contactRows: ContactRow[];
  facts: Fact[];
  skills: Skill[];
  projects: Project[];
}
