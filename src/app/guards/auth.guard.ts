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
  const [userAuth, userData] = await authService.checkUserAuthentication();
  const isAuthRoute = [
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/forgot-password',
  ].includes(state.url);
  if (!userAuth) {
    if (isAuthRoute) {
      return true;
    } else {
      router.navigate(['/auth/sign-in']);
      return false;
    }
  } else {
    userData?.multiFactor?.user?.providerData[0]?.phoneNumber === null
      ? (['/'].includes(state.url) || isAuthRoute) &&
        router.navigate(['/auth/onboarding'])
      : isAuthRoute && router.navigate(['/user']);
    return true;
  }
};
