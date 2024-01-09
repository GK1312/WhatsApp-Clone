// App login module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Reactive forms
import { ReactiveFormsModule } from '@angular/forms';
// Material
import { MatIconModule } from '@angular/material/icon';
// Auth Pages
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OnboardingComponent } from '../user/onboarding/onboarding.component';
// Auth components
import { GoogleLoginBtnComponent } from 'src/app/components/auth/google-login-btn/google-login-btn.component';
import { ThemeBtnComponent } from 'src/app/components/theme-btn/theme-btn.component';
import { CountryCodeSelectComponent } from 'src/app/components/country-code-select/country-code-select.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    component: LoginComponent,
    data: { title: 'LoginPageIsHere' },
  },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'onboarding', component: OnboardingComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    OnboardingComponent,
    GoogleLoginBtnComponent,
    ThemeBtnComponent,
    CountryCodeSelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // Material
    MatIconModule,
    // Reactive forms
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
