import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpClient = inject(HttpClient)

  constructor() { }

  getUsers() {
    return this.httpClient.get(`${environment.apiUrl}/users`)
  }
}
