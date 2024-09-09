import { inject, Injectable } from '@angular/core';
import { LoginDto, LoginResponse, RegisterDto } from './models/auth.model';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  url = environment.apiUrl;
  router = inject(Router);
  
  constructor() {
   }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    // return this.httpClient.post<LoginResponse>('http://localhost:3000/auth/login', loginDto)
    return this.httpClient.post<LoginResponse>(`${this.url}/login`, loginDto)
    .pipe(tap((data: LoginResponse) => {
      console.log('data', data)
      localStorage.setItem('auth', JSON.stringify(data));
    }))

  }

  register(registerDto: RegisterDto): Observable<void> {
    // return this.httpClient.post<void>('http://localhost:3000/auth/register', registerDto)
    return this.httpClient.post<void>(`${this.url}/register`, registerDto)

  }

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }

  verifyAccount(activationToken: string): Observable<any> {
     return this.httpClient.get<void>(`${this.url}/verify-account`, {
      params: {
        activationToken
      }
     }).pipe(tap(() => {}))
  }
}


// {
//   "email": "eve.holt@reqres.in",
//   "password": "cityslicka"
// } //mailinator.com
