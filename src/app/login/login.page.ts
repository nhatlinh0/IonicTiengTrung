import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  loginData = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private router: Router, private firebaseService: FirebaseService,
    private alertController: AlertController
  ) {}

  async onLogin() {
    const users = await this.firebaseService.getUsers(); // Lấy danh sách người dùng từ Firebase

    if (users) {
      // Tìm người dùng có username và password khớp với thông tin nhập vào
      const user = Object.values(users).find((u: any) => u.username === this.loginData.email && u.password === this.loginData.password);

      if (user) {
        // Nếu tìm thấy người dùng, chuyển hướng đến trang home
        this.router.navigate(['/home']);
      } else {
        // Nếu không tìm thấy người dùng, hiển thị thông báo lỗi
        this.showAlert('Lỗi', 'Sai tài khoản hoặc mật khẩu. Vui lòng thử lại');
      }
    } else {
      this.showAlert('Error', 'Unable to fetch users from the database.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
