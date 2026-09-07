import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/language/language.service';
import { ContactFormService } from '../../core/contact/contact-form.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.less',
})
export class Contact {
  private readonly languageService = inject(LanguageService);
  private readonly contactFormService = inject(ContactFormService);

  readonly t = this.languageService.t;

  name = '';
  email = '';
  subject = '';
  message = '';
  privacyAccepted = false;

  readonly sending = signal(false);
  readonly sent = signal(false);
  readonly error = signal(false);

  async submit(form: { valid: boolean | null }): Promise<void> {
    if (!form.valid || !this.privacyAccepted || this.sending()) {
      return;
    }
    this.sending.set(true);
    this.error.set(false);
    try {
      await this.contactFormService.send({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      });
      this.sent.set(true);
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.privacyAccepted = false;
    } catch {
      this.error.set(true);
    } finally {
      this.sending.set(false);
    }
  }
}
