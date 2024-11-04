import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

interface Question {
  question: string;
  answers: string[];
  correct: string;
}

@Component({
  selector: 'app-listen',
  templateUrl: './listen.page.html',
  styleUrls: ['./listen.page.scss'],
})
export class ListenPage implements OnInit {
  audio: HTMLAudioElement;
  isActive: boolean = false;
  questions: Question[] = [];
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswerIndex: number | null = null;
  audioFiles: string[] = ["cau1.mp3", "cau2.mp3", "cau3.mp3", "cau4.mp3", "cau5.mp3", "cau6.mp3", "cau7.mp3", "cau8.mp3", "cau9.mp3", "cau10.mp3", ];

  playAudio() {
    this.isActive = true;
    this.audio.play();
    this.reset();
  }
  
  reset() {
    setTimeout(() => { 
      setTimeout(() => {
        this.isActive = false;
      }, 1000); // thời gian phải trùng với thời gian của animation
    }, 10); // thời gian nhỏ để đảm bảo lớp được reset
  }
  

  constructor(private quizService: FirebaseService, private router: Router) { 
    // Khởi tạo audio element
    this.audio = new Audio();
    // Đường dẫn đến file audio
    this.updateAudioSource();
  }

  updateAudioSource() {
    if (this.currentQuestionIndex < this.audioFiles.length) {
      this.audio.src = `assets/audio/${this.audioFiles[this.currentQuestionIndex]}`;
      this.audio.load();
    } else {
      console.error('No audio file for this question');
    }
  }

  async ngOnInit() {
    this.questions = await  this.quizService.getListenQuestions();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  
  selectAnswer(selectedIndex: number) {
    this.selectedAnswerIndex = selectedIndex;
  }

  nextQuestion() {
    if (this.selectedAnswerIndex !== null) {
      const selectedAnswer = this.questions[this.currentQuestionIndex].answers[this.selectedAnswerIndex];
      if (selectedAnswer === this.questions[this.currentQuestionIndex].correct) {
        this.score++;
      }
      this.currentQuestionIndex++;
      this.selectedAnswerIndex = null; // Reset lựa chọn đáp án
      this.updateAudioSource();
      if (this.currentQuestionIndex >= this.questions.length) {
        this.router.navigate(['/result', { score: this.score, totalQuestions: this.questions.length }]);
      }
    }
  }

}
