import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

interface Cau {
  PhienAm: string;
  Trung: string;
  Viet: string;
}

interface Caunoithongdung {
  ChuDe1_Cau: Cau[] | null;
  ChuDe2_Cau: Cau[] | null;
}

@Component({
  selector: 'app-cauthongdung',
  templateUrl: './cauthongdung.page.html',
  styleUrls: ['./cauthongdung.page.scss'],
})
export class CauthongdungPage implements OnInit {
  chuDe1Cau: Cau[] = []; // Mảng chứa dữ liệu cho ChuDe1_Cau
  chuDe2Cau: Cau[] = []; // Mảng chứa dữ liệu cho ChuDe2_Cau
  audioContext: AudioContext;
  gainNode: GainNode;

  constructor(private router: Router, private db: AngularFireDatabase) {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    this.gainNode.gain.value = 1; // Đặt giá trị âm lượng (0.0 đến 1.0)
    this.gainNode.connect(this.audioContext.destination);
   }

   ngOnInit() {
    this.getCaunoithongdung();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  getCaunoithongdung() {
    this.db.object<Caunoithongdung>('/Caunoithongdung').valueChanges().subscribe(data => {
      console.log('Dữ liệu nhận được:', data);
      if (data) {
        this.chuDe1Cau = data.ChuDe1_Cau || []; // Gán dữ liệu cho chuDe1Cau
        this.chuDe2Cau = data.ChuDe2_Cau || []; // Gán dữ liệu cho chuDe2Cau
      }
    });
  }

  playAudio(text: string) {
    // Tạo một đối tượng SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN'; // Đặt ngôn ngữ là tiếng Trung

    // Phát âm thanh khi bắt đầu phát
    utterance.onstart = () => {
      const audio = new Audio('path/to/your/audio.mp3'); // Đường dẫn tới file âm thanh
      audio.volume = 2.0; // Đặt âm lượng tối đa
      audio.play(); // Phát âm thanh
    };

    // Phát văn bản
    speechSynthesis.speak(utterance);
  }
}
