import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLoginBtnComponent } from './google-login-btn.component';

describe('GoogleLoginBtnComponent', () => {
  let component: GoogleLoginBtnComponent;
  let fixture: ComponentFixture<GoogleLoginBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoogleLoginBtnComponent],
    });
    fixture = TestBed.createComponent(GoogleLoginBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
