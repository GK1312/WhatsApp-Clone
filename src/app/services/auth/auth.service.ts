import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, from, switchMap } from 'rxjs';
// import { FirebaseApp } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: Observable<any>;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user = this.afAuth.authState;
  }

  signInWithGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    return from(this.afAuth.signInWithPopup(provider)).pipe(
      switchMap(() => {
        return this.afAuth.authState;
      })
    );
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap(() => {
        return this.afAuth.authState;
      })
    );
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['/auth/sign-in']);
    });
  }
}
