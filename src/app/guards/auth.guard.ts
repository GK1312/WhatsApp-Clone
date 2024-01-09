import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Promise<boolean | UrlTree> => {
  const authService = inject(AuthService) as AuthService;
  const router = inject(Router) as Router;
  const userAuth = await authService.checkUserAuthentication();
  if (!userAuth) {
    if (
      ['/auth/sign-in', '/auth/sign-up', '/auth/forgot-password'].includes(
        state.url
      )
    ) {
      return true;
    } else {
      router.navigate(['/auth/sign-in']);
      return false;
    }
  } else {
    ['/auth/sign-in', '/auth/sign-up', '/auth/forgot-password'].includes(
      state.url
    ) && router.navigate(['/']);
    return true;
  }
};
