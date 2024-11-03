import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  loginData = { email: '', password: '' };

  constructor(private router: Router) {}

  onLogin() {
    // Logic đăng nhập
    console.log('Login Data:', this.loginData);
    // Chuyển hướng đến trang home nếu đăng nhập thành công
    this.router.navigate(['/home']);
  }
}
