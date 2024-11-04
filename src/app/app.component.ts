import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isLoggedIn: boolean = false;
  constructor(private router: Router) { }

  logout() {
    // Xử lý đăng xuất (nếu cần thiết)
    // Ví dụ: xóa token, thông tin người dùng, v.v.

    // Chuyển hướng về trang đăng nhập
    this.router.navigate(['/login']);
  }
}
