import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  showPassword: boolean = false;
  forgotPasswordForm: FormGroup = new FormGroup({
    countryCode: new FormControl('+91', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{6,}$'),
    ]),
  });

  constructor() {}

  get countryCode() {
    return this.forgotPasswordForm.get('countryCode') as FormControl;
  }
}
