import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const isAdminAuthenticated =
    localStorage.getItem('isAdminAuthenticated') === 'true';
  return isAdminAuthenticated;
};
