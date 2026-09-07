import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LangCode } from '../../core/language/language.types';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class Header {
  private readonly languageService = inject(LanguageService);

  readonly t = this.languageService.t;
  readonly lang = this.languageService.lang;
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setLang(lang: LangCode): void {
    this.languageService.setLang(lang);
  }
}
