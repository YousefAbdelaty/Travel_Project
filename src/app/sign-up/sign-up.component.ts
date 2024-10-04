import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  showPassword:boolean =false;
  showConfirmPassword:boolean=false;

  togglePasswordVisibility(): void {
   this.showPassword = !this.showPassword;
 }
  toggleConfirmPasswordVisibility(): void {
   this. showConfirmPassword = !this. showConfirmPassword;
 }
  

  email: string ='';
  pass: string ='';
  confirm_pass:string=''
  
  users: { email: string; pass: string }[] = [];

  onsubmit(){
    const data={

      email:this.email,
      pass:this.pass,
      confirm_pass:this.confirm_pass

    };

    if(this.pass==this.confirm_pass){
    const storedUsers = localStorage.getItem('users');
    let users = storedUsers ? JSON.parse(storedUsers) : [];

    // Add the new user to the users array
    users.push(data);

    // Save the updated array to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Clear the input fields
    this.email = '';
    this.pass = '';
    this.confirm_pass='';
    console.log(users);

    }else {
      alert("Password not match")
   
      this.confirm_pass='';
    }
    
  }
  

  constructor(public router: Router){}

  showLogin(){
    this.router.navigate(['/login'])
    
  }



  

}
