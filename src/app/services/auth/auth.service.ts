import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, from, switchMap } from 'rxjs';

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

  checkUserAuthentication(): Promise<boolean | any> {
    return new Promise((resolve, reject) => {
      const userAuth = this.afAuth.authState.subscribe((user) => {
        if (user) {
          resolve([true, user]);
        } else {
          resolve([false, null]);
        }
        userAuth.unsubscribe();
      });
    });
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      window.location.reload();
    });
  }
}
