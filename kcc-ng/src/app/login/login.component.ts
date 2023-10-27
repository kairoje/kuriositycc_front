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

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {}

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
    this.apiService.loginUser(userData).subscribe((response: any) => {
      const token = response.token;
      if(token) {
        localStorage.setItem('jwt_token', token);
      }
    },
    (error: any) => {

    }
    );
  }
}
