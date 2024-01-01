import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

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
  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    this.authService
      .logout()
      .then(() => {
        alert('Logged out successfully');
      })
      .catch((error) => {
        console.log(
          '🚀 ~ file: login.component.ts:24 ~ LoginComponent ~ logout ~ error:',
          error
        );
      });
  }
  googleLogin() {
    this.authService.signInWithGoogle().subscribe(
      (user) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(
          '🚀 ~ file: login.component.ts:24 ~ LoginComponent ~ googleLogin ~ error:',
          error
        );
      }
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
