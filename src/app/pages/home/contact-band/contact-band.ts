import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../core/language/language.service';
import { ContactFormService } from '../../../core/contact/contact-form.service';

@Component({
  selector: 'app-contact-band',
  imports: [FormsModule],
  templateUrl: './contact-band.html',
  styleUrl: './contact-band.less',
})
export class ContactBand {
  private readonly languageService = inject(LanguageService);
  private readonly contactFormService = inject(ContactFormService);

  readonly t = this.languageService.t;

  name = '';
  email = '';
  message = '';

  readonly sending = signal(false);
  readonly sent = signal(false);
  readonly error = signal(false);

  async submit(form: { valid: boolean | null }): Promise<void> {
    if (!form.valid || this.sending()) {
      return;
    }
    this.sending.set(true);
    this.error.set(false);
    try {
      await this.contactFormService.send({ name: this.name, email: this.email, message: this.message });
      this.sent.set(true);
      this.name = '';
      this.email = '';
      this.message = '';
    } catch {
      this.error.set(true);
    } finally {
      this.sending.set(false);
    }
  }
}
