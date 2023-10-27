import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.apiService.loginUser(loginData).subscribe(
        (response) => {
          const userName = response.valueOf.name;
          this.successMessage = `Login Sucessful! Welcome Back ${userName}!`
          this.router.navigate(['/']);
        },
        (error) => {

        }
      );
    }
  }

  login(userData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
      })
    };

    this.http.post('/api/auth/login', userData, httpOptions)
      .subscribe((response: any) => {

      }, (error: any) => {

      });
  }
}
