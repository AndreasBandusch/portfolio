import { FormControl, Validators } from '@angular/forms';

export class FormElement {
    warnMessage: boolean = false;
    hideHoverEffect: boolean;
    showBorder: boolean;
    placeholder: string;
    title: string;
    inputName: string;
    bgImageClass: string = '';
    validation: any;
    errorMessage: string = '';
    hasErrors: boolean = true;

    constructor(title: string, inputName: string) {
        this.title = title;
        this.placeholder = title;
        this.inputName = inputName;
        this.setFormValidation();
    }


    setFormValidation() {
        if (this.inputName === 'email') {
            this.validation = new FormControl('', [Validators.required, Validators.email]);
        } else {
            this.validation = new FormControl('', [Validators.required]);
        }
    }


    showLegend() {
        this.hideHoverEffect = true;
        this.showBorder = true;
        this.placeholder = '';
    }


    showWarnMessage(warnMessage: any) {
        this.warnMessage = warnMessage;
    }


    getErrorMessage() {
        if (this.inputName === 'email') {
            this.checkEmail();
        } else if (this.inputName === 'name') {
            this.checkName();
        } else if (this.inputName === 'message') {
            this.checkMessage();
        }
        this.setFormCheckIcon();
    }


    checkEmail() {
        if (this.validation.hasError('email')) {
            this.errorMessage = 'Not a valid email';
            this.hasErrors = true;
        } else if (this.validation.hasError('required')) {
            this.errorMessage = this.getRequiredMessage();
        } else {
            this.getEmptyErrorMessager();
        }
    }


    checkName() {
        (this.validation.hasError('required') ? this.errorMessage = this.getRequiredMessage() : this.getEmptyErrorMessager());
    }


    checkMessage() {
        if (this.validation.hasError('required')) {
            this.errorMessage = 'Your message is empty'
            this.hasErrors = true;
        } else {
            this.getEmptyErrorMessager();
        }
    }


    getRequiredMessage() {
        this.hasErrors = true;
        return `Your ${this.inputName} is require`
    }


    getEmptyErrorMessager() {
        this.hasErrors = false;
        return this.errorMessage = '';
    }


    setFormCheckIcon() {
        (this.errorMessage ? this.bgImageClass = 'invalid' : this.bgImageClass = 'valid');
    }


    resetFormField() {
        this.warnMessage = false;
        this.hideHoverEffect = false;
        this.showBorder = false;
        this.placeholder = this.title;
        this.title = this.title;
        this.bgImageClass = '';
        this.errorMessage = '';
        this.hasErrors = true;
        this.setFormValidation();
    }
}




