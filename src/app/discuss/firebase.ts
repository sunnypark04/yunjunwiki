import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🌟 아까 1단계에서 복사해둔 본인의 firebaseConfig 값으로 덮어씌워주세요!
const firebaseConfig = {
  apiKey: "AIzaSyB...",
  authDomain: "yunjun-wiki.firebaseapp.com",
  projectId: "yunjun-wiki",
  storageBucket: "yunjun-wiki.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Firebase 초기화 및 Firestore DB 내보내기
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);