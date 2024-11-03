import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phongcanh',
  templateUrl: './phongcanh.page.html',
  styleUrls: ['./phongcanh.page.scss'],
})
export class PhongcanhPage implements OnInit {
  public boThuList: any[] = [];
  public filteredList: any[] = [];

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.loadPhongCanhTuVung();
  }
  navigateToHome() {
    this.router.navigate(['/hoctuvung']);
  }

  async loadPhongCanhTuVung() {
    this.boThuList = await this.firebaseService.getPhongCanhTuVung();
    if (this.boThuList) {
      this.filteredList = this.boThuList; // Nếu muốn loại bỏ phần tử đầu tiên, nếu không thì bỏ qua dòng này
    }
  }
}
