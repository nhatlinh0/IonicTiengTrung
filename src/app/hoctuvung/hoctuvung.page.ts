import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hoctuvung',
  templateUrl: './hoctuvung.page.html',
  styleUrls: ['./hoctuvung.page.scss'],
})
export class HoctuvungPage implements OnInit {


  constructor(private router: Router) { }
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToCamXuc() {
    this.router.navigate(['/camxuc']);
  }

  navigateToGiaDinh() {
    this.router.navigate(['/giadinh']);
  }

  navigateToGiaiTri() {
    this.router.navigate(['/giaitri']);
  }

  navigateToPhongCanh() {
    this.router.navigate(['/phongcanh']);
  }

  navigateToTheThao() {
    this.router.navigate(['/thethao']);
  }

  navigateToThoiGian() {
    this.router.navigate(['/thoigian']);
  }

  navigateToTraiCay() {
    this.router.navigate(['/traicay']);
  }

  navigateToVanPhong() {
    this.router.navigate(['/vanphong']);
  }

  navigateToDoUong() {
    this.router.navigate(['/douong']);
  }

  navigateToDongVat() {
    this.router.navigate(['/dongvat']);
  }

  ngOnInit() {
    
  }

}
