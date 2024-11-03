import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-traicay',
  templateUrl: './traicay.page.html',
  styleUrls: ['./traicay.page.scss'],
})
export class TraicayPage implements OnInit {
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
    this.boThuList = await this.firebaseService.getTraiCayTuVung();
    if (this.boThuList) {
      this.filteredList = this.boThuList; // Nếu muốn loại bỏ phần tử đầu tiên, nếu không thì bỏ qua dòng này
    }
  }

}
