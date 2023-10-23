import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:9092';

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(`${this.apiUrl}/api/users`);
  }

  registerUser(userData: any) {
    const registrationEndpoint = `${this.apiUrl}/api/auth/register`;
    return this.http.post(registrationEndpoint, userData);
  }
}

