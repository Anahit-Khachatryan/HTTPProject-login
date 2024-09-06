import { HttpInterceptorFn } from '@angular/common/http';
import { finalize, tap } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('req', req)
  console.log(1, localStorage.getItem('auth'))
  const { token } = JSON.parse(localStorage.getItem('auth') || '{}');
  
  // req.headers.append('Authorization', `Bearer ${accessToken}`)
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
  return next(modifiedReq);
};
