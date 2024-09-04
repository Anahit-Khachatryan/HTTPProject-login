import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// route - en routen e vorin uzum enk gnal
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let auth = localStorage.getItem('auth');
  if (auth && JSON.parse(auth).token) {
    return true
    
  }
  // return false;
  return router.parseUrl('/login') //veradardznum e url tree, ete paymanin chi bavararum gres orinak /home ktani /logini ej
};
