import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const registrationData = this.registrationForm.value;
      // Make an HTTP POST request to your API to register the user
      this.apiService.registerUser(registrationData).subscribe(
        (response) => {
          // Handle a successful registration (e.g., show a success message, redirect to login page, etc.)
        },
        (error) => {
          // Handle errors (e.g., display an error message)
        }
      );
    }
  }
}


