import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-bothuhanthu',
  templateUrl: './bothuhanthu.page.html',
  styleUrls: ['./bothuhanthu.page.scss'],
})
export class BothuhanthuPage implements OnInit {
  public boThuList: any[] =[];
  public filteredList: any[] = [];
  
  constructor(private router: Router, private firebaseService: FirebaseService) { }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    this.loadBoThu();
  }
  
  async loadBoThu() {    
    this.boThuList = await this.firebaseService.getData('/BoThuHanThu');   
    this.filteredList = this.boThuList.slice(1);
  }
}
