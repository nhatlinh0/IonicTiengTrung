import { Injectable, Inject } from '@angular/core';
import { Database, ref, get, child } from "firebase/database";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  getBoThuVocabulary(boThuId: string) {
    throw new Error('Method not implemented.');
  }

  constructor(@Inject('Database') private db: Database) {}


  async getData(path: string) {
    const dbRef = ref(this.db);
    try {
      const snapshot = await get(child(dbRef, path));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  
  // cam xuc
  async getCamXucTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Cảm xúc');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // gia dinh
  async getGiaDinhTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Gia đình');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // giai tri
  async getGiaiTriTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Giải trí');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // phong canh
  async getPhongCanhTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Phong cảnh');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // the thao
  async getTheThaoTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Thể thao');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // thoi gian
  async getThoiGianTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Thời gian');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // trai cay
  async getTraiCayTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Trái cây');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // VanPhong
  async getVanPhongTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Văn phòng');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // DoUong
  async getDoUongTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Đồ uống');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  // DongVat
  async getDongVatTuVung(): Promise<any[]> {
    const dbRef = ref(this.db, '/TuVung/Động vật');
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const data: any[] = [];
        snapshot.forEach((childSnapshot) => {
          const tuVung = childSnapshot.val();
          if (tuVung !== null) {
            data.push(tuVung);
          }
        });
        return data;
      } else {
        console.log("No data available");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

}
