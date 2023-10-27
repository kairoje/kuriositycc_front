import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: any;
  isAuthenticated: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}


  ngOnInit(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.isAuthenticated = true;

      this.apiService.getUserData().subscribe((response) => {
        this.data = response;
      });
    }
  }
  title = 'kcc-ng';

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
