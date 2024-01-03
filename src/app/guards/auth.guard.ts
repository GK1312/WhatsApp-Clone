import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree => {
  const authService = inject(AngularFireAuth) as AngularFireAuth;
  const router = inject(Router) as Router;
  return authService.authState.pipe(
    take(1),
    map((user) => {
      if (user) {
        ['/auth/sign-in', '/auth/sign-up', '/auth/forgot-password'].includes(
          state.url
        ) && router.navigate(['/']);
        return true;
      } else {
        return router.createUrlTree(['/auth/sign-in']);
      }
    })
  );
};
