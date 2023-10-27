import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  user: any;
  product: any;

  getUserDetails(userId: string) {
    return this.http.get(`/api/auth/users/${userId}`);
  }

  getProductDetails(productId: string) {
    return this.http.get(`/api/products/${productId}`);
  }
  

  constructor(private apiService: ApiService, private http: HttpClient) {}

  ngOnInit(): void {
    const userId = 'user-id';
    this.apiService.getUserDetails(userId).subscribe((userData: any) => {
      this.user = userData;
    });


    const productId = 'product-id';
    this.apiService.getProductDetails(productId).subscribe((productData: any) => {
      this.product = productData;
    });
  }
}