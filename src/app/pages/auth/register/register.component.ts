import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  showPassword: boolean = false;
  registerForm: FormGroup = new FormGroup({
    countryCode: new FormControl('+91', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{6,}$'),
    ]),
  });
  constructor() {}
  googleLogin() {}

  get countryCode() {
    return this.registerForm.get('countryCode') as FormControl;
  }
}
