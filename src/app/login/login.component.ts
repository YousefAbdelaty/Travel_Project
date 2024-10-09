import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  
  submitted: boolean = false;
  userform!: FormGroup;

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor(public router: Router, public fb: FormBuilder) {
    this.userform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onsubmit() {
    

    if (this.userform.valid) {
      const storedUsers = localStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      console.log('Stored Users:', users); 

      const userExists = users.some((user: { email: string; pass: string }) => {
        return user.email === this.userform.get('email')?.value && user.pass === this.userform.get('password')?.value;
      });

      if (userExists) {
        alert("Login successful");
        this.userform.reset(); 
        this.router.navigate(['/']); 
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Please fill all required fields correctly");
    }
  }

  showSignup() {
    this.router.navigate(['/signup']);
  }
}

