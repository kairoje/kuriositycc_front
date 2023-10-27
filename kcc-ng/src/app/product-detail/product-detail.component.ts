import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      this.apiService.getProductById(productId).subscribe(
        (data: any) => {
          this.product = data;
        },
        (error: any) => {
          console.error('Error fetching product details:', error);
        }
      );
    });
  }

  buyProduct() {
    this.router.navigate(['/order']);
  }
}
