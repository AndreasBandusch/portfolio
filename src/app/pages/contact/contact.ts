import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language/language.service';
import { ContactForm } from '../../shared/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
  templateUrl: './contact.html',
  styleUrl: './contact.less',
})
export class Contact {
  private readonly languageService = inject(LanguageService);
  readonly t = this.languageService.t;
}
