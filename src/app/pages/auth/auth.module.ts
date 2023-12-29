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
// Auth components
import { GoogleLoginBtnComponent } from 'src/app/components/auth/google-login-btn/google-login-btn.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'LoginPageIsHere' },
  },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    GoogleLoginBtnComponent,
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
