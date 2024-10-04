import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string ='';
  pass: string ='';


   showPassword:boolean =false;
  showConfirmPassword:boolean=false;

  togglePasswordVisibility(): void {
   this.showPassword = !this.showPassword;
 }
  toggleConfirmPasswordVisibility(): void {
   this. showConfirmPassword = !this. showConfirmPassword;
 }
  

onsubmit() {
  // Retrieve the users array from local storage
  const storedUsers = localStorage.getItem('users');

  // Check if the array exists, if not, set it to an empty array
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  console.log('Stored Users:', users); // Log to check if users are retrieved correctly

  // Use the `some` method to check if there's a matching email and password
  const userExists = users.some((user: { email: string; pass: string }) => {
    return user.email === this.email && user.pass === this.pass;
  });

  if (userExists) {
    
    alert("Login successful");
     this.email ='';
     this.pass ='';

  } else {
   alert("Invalid email or password");
  }
}
  
  constructor(public router: Router){}

  showSignup(){
    this.router.navigate(['/signup'])
  }

}
