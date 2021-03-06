import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("isLoggedIn"))
    this.router.navigateByUrl('/home');
  }

  // Validate and submit the login form.
  submitLoginForm(email: HTMLInputElement,password: HTMLInputElement): void {
if(email.value == "admin" && password.value == "admin"){
  this.router.navigateByUrl('/admin');
  localStorage.setItem("isLoggedin","true");
}else if(email.value == "utkarsh@nagarro.com" && password.value == "password") {
  this.router.navigateByUrl('/home');
  localStorage.setItem("isLoggedin","true");
}
    
  
  }

}
