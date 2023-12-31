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

  loginUser(userData: any) {
    const loginEndpoint = `${this.apiUrl}/api/auth/login`;
    return this.http.post(loginEndpoint, userData);
  }

  getProducts() {
    return this.http.get(`${this.apiUrl}/api/products`);
  }

  getProductById(productId: any) {
    return this.http.get(`${this.apiUrl}/api/products/${productId}`);
  }
  
  getUserDetails(userId: string) {
    return this.http.get(`/api/users/${userId}`);
  }

  getProductDetails(productId: string) {
    return this.http.get(`/api/products/${productId}`);
  }
}

