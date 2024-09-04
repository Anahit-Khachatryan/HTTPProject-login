import { CanActivateFn } from '@angular/router';

export const publicGuard: CanActivateFn = (route, state) => {
  let auth = localStorage.getItem('auth');
  if (auth && JSON.parse(auth).token) {
    return false
    // return router.parseUrl('/login')

  }
  return true;

};
