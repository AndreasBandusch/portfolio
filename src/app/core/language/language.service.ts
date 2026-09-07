import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DE } from './language.de';
import { EN } from './language.en';
import { LangCode, Language } from './language.types';

const STORAGE_KEY = 'portfolio-lang';

/**
 * Own signal-based translation service — deliberately not Angular's built-in
 * i18n (@angular/localize). Single build, plain client-side toggle after
 * hydration, no /de or /en routes. Rationale documented in the Vault note
 * (02 Projekte/Portfolio-Seite/Portfolio-Seite.md, section "Zweisprachig")
 * and in this repo's progress.md.
 *
 * SSR-safety: the server always renders German (isPlatformBrowser guard
 * below) — reading localStorage during server render would throw, since
 * there is no `window` in Node. The client corrects to a stored preference,
 * if any, right after construction.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly langSignal = signal<LangCode>('de');
  readonly lang = this.langSignal.asReadonly();
  readonly t = computed<Language>(() => (this.langSignal() === 'de' ? DE : EN));

  constructor() {
    if (this.isBrowser) {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'de' || stored === 'en') {
        this.langSignal.set(stored);
      }
    }
  }

  setLang(lang: LangCode): void {
    this.langSignal.set(lang);
    if (this.isBrowser) {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  }

  toggle(): void {
    this.setLang(this.langSignal() === 'de' ? 'en' : 'de');
  }
}
