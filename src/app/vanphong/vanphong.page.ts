import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vanphong',
  templateUrl: './vanphong.page.html',
  styleUrls: ['./vanphong.page.scss'],
})
export class VanphongPage implements OnInit {
  public boThuList: any[] = [];
  public filteredList: any[] = [];

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.loadCamXucTuVung();
  }
  navigateToHome() {
    this.router.navigate(['/hoctuvung']);
  }

  async loadCamXucTuVung() {
    this.boThuList = await this.firebaseService.getVanPhongTuVung();
    if (this.boThuList) {
      this.filteredList = this.boThuList; // Nếu muốn loại bỏ phần tử đầu tiên, nếu không thì bỏ qua dòng này
    }
  }

}
