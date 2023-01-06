import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormElement } from 'src/models/form-element.model'

@Component({
  selector: 'app-section-contact-me',
  templateUrl: './section-contact-me.component.html',
  styleUrls: ['./section-contact-me.component.scss']
})

export class SectionContactMeComponent {
  @ViewChild('contact') form: ElementRef;
  @ViewChild('formArea') formArea: any;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;
  @ViewChild('messageSend') messageSend: any;

  name = new FormElement('Your name', 'name');
  email = new FormElement('Your email', 'email');
  message = new FormElement('Your message', 'message');


  async sendMail() {
    let formData = this.createFormData();

    this.deactivateForm();
    this.sendDataToServer(formData);
    this.showSendMessageDialog();
  }


  createFormData(): FormData {
    let fd = new FormData();

    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);
    return fd;
  }


  deactivateForm(): void {
    this.formArea.nativeElement.classList.add("disabled");
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendButton.nativeElement.disabled = true;
  }


  async sendDataToServer(formData: FormData) {
    await fetch('https://www.andreas-bandusch.de/send_mail/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    );
  }


  closeDialog(): void {
    this.hideSendMessageDialog();
    this.resetForm();
    this.resetErrorLevels();
    this.activateForm();
  }


  showSendMessageDialog(): void {
    this.messageSend.nativeElement.classList.remove("d-none");
    this.messageSend.nativeElement.classList.add("message-send");
  }


  hideSendMessageDialog(): void {
    this.messageSend.nativeElement.classList.add("d-none");
    this.messageSend.nativeElement.classList.remove("message-send");
  }


  resetErrorLevels(): void {
    this.name.hasErrors = true;
    this.email.hasErrors = true;
    this.message.hasErrors = true
  }


  activateForm(): void {
    this.formArea.nativeElement.classList.remove("disabled");
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButton.nativeElement.disabled = false;
  }


  resetForm(): void {
    this.name.resetFormField();
    this.email.resetFormField();
    this.message.resetFormField();;
  }
}

