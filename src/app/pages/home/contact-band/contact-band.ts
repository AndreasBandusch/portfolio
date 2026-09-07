import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/language/language.service';
import { ContactForm } from '../../../shared/contact-form/contact-form';

@Component({
  selector: 'app-contact-band',
  imports: [ContactForm],
  templateUrl: './contact-band.html',
  styleUrl: './contact-band.less',
})
export class ContactBand {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
