import { Component, inject } from '@angular/core';
import { LegalSection } from '../../shared/legal-section/legal-section';
import { LanguageService } from '../../core/language/language.service';

@Component({
  selector: 'app-imprint',
  imports: [LegalSection],
  templateUrl: './imprint.html',
})
export class Imprint {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
