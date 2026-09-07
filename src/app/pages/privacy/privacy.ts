import { Component, inject } from '@angular/core';
import { LegalSection } from '../../shared/legal-section/legal-section';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-privacy',
  imports: [LegalSection],
  templateUrl: './privacy.html',
})
export class Privacy {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
