import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupData = { email: '', password: '', confirmPassword: '' };

  constructor(private router: Router) {}

  onSignup() {
    // Logic đăng ký
    console.log('Signup Data:', this.signupData);
    // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
    this.router.navigate(['/login']);
  }
}
