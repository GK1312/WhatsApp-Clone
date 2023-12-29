import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword: boolean = false;
  loginForm: FormGroup = new FormGroup({
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
  googleLogin() {
    console.log(
      '🚀 ~ file: login.component.ts:20 ~ LoginComponent ~ googleLogin ~ googleLogin:'
    );
  }
  handleLogin() {
    console.log(
      '🚀 ~ file: login.component.ts:24 ~ LoginComponent ~ handleLogin ~ handleLogin:'
    );
  }

  get countryCode() {
    return this.loginForm.get('countryCode') as FormControl;
  }
}
