import { Injectable } from '@angular/core';

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Posts to the existing PHP mail script on the webspace — same one the old
 * portfolio (portfolio-old) used, not part of this repo. See progress.md:
 * the script currently only reads name/email/message; the "subject" field
 * added by the full contact page form is sent but silently ignored until
 * the script itself is updated on the webspace (outside this repo's reach).
 */
@Injectable({ providedIn: 'root' })
export class ContactFormService {
  private readonly endpoint = 'https://www.bandusch.com/send_mail/send_mail.php';

  async send(payload: ContactPayload): Promise<void> {
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('email', payload.email);
    if (payload.subject) {
      formData.append('subject', payload.subject);
    }
    formData.append('message', payload.message);

    const response = await fetch(this.endpoint, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Contact form submission failed with status ${response.status}`);
    }
  }
}
