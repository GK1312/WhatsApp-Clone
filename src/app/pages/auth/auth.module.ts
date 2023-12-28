// App login module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// Reactive forms
import { ReactiveFormsModule } from '@angular/forms';
// Material
import { MatIconModule } from '@angular/material/icon';
// Login components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'LoginPageIsHere' },
  },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
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
