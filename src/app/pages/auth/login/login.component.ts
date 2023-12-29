import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
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
}
