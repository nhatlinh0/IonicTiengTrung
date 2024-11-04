import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  score: number = 0;
  totalQuestions: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const scoreParam = this.route.snapshot.paramMap.get('score');
    const totalQuestions = this.route.snapshot.paramMap.get('totalQuestions');
    if (scoreParam) {
      this.score = +scoreParam; // Sử dụng + để chuyển đổi string sang number
    }
    if (totalQuestions) {
      this.totalQuestions = +totalQuestions; // Sử dụng + để chuyển đổi string sang number
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  restart() {
    this.router.navigate(['/home']);
  }
}
