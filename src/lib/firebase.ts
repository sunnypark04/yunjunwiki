import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🌟 데이터베이스 기능 불러오기

// 방금 발급받은 진짜 Firebase 설정값!
const firebaseConfig = {
  apiKey: "AIzaSyCBnh13Z2gaV63jaK51Ukakj-nHaaW6nq8",
  authDomain: "yunjun-wiki.firebaseapp.com",
  projectId: "yunjun-wiki",
  storageBucket: "yunjun-wiki.firebasestorage.app",
  messagingSenderId: "552697596833",
  appId: "1:552697596833:web:54f209c07373d61b5e99e0",
  measurementId: "G-0CS72YEYX2"
};

// Firebase 초기화 및 Firestore DB 내보내기
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);