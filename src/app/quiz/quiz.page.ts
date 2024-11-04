import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


interface Question {
  question: string;
  answers: string[];
  correct: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswerIndex: number | null = null;

  constructor(private quizService: FirebaseService, private router: Router) { }

  async ngOnInit() {
    this.questions = await  this.quizService.getQuestions();
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

      if (this.currentQuestionIndex >= this.questions.length) {
        this.router.navigate(['/result', { score: this.score, totalQuestions: this.questions.length }]);
      }
    }
  }
} 
