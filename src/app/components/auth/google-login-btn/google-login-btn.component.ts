import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-google-login-btn',
  templateUrl: './google-login-btn.component.html',
  styleUrls: ['./google-login-btn.component.scss'],
})
export class GoogleLoginBtnComponent {
  @Output() login: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  handleLogin() {
    this.login.emit();
  }
}
