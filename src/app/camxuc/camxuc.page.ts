import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camxuc',
  templateUrl: './camxuc.page.html',
  styleUrls: ['./camxuc.page.scss'],
})
export class CamxucPage implements OnInit {
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
    this.boThuList = await this.firebaseService.getCamXucTuVung();
    if (this.boThuList) {
      this.filteredList = this.boThuList; // Nếu muốn loại bỏ phần tử đầu tiên, nếu không thì bỏ qua dòng này
    }
  }

}
