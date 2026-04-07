"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
// 🌟 doc, updateDoc, deleteDoc 함수를 추가로 불러옵니다.
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Message {
  id: string;
  name: string;
  content: string;
  date: string;
  timestamp: number;
}

export default function DiscussPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // 수정 모드 상태 관리
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editContent, setEditContent] = useState("");

  // 1. 데이터 불러오기
  const fetchMessages = async () => {
    try {
      const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      const fetchedMessages: Message[] = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(fetchedMessages);
    } catch (error) {
      console.error("불러오기 에러:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // 2. 메시지 등록
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const newMessage = {
      name,
      content,
      date: new Date().toLocaleString("ko-KR"),
      timestamp: Date.now(),
    };

    try {
      await addDoc(collection(db, "messages"), newMessage);
      setName("");
      setContent("");
      fetchMessages();
    } catch (error) {
      alert("등록 실패!");
    }
  };

  // 3. 메시지 삭제 🌟
  const handleDelete = async (id: string) => {
    if (!confirm("정말 이 메시지를 삭제할까요?")) return;

    try {
      await deleteDoc(doc(db, "messages", id));
      fetchMessages(); // 목록 새로고침
    } catch (error) {
      alert("삭제 실패!");
    }
  };

  // 4. 수정 모드 진입
  const startEdit = (msg: Message) => {
    setEditingId(msg.id);
    setEditName(msg.name);
    setEditContent(msg.content);
  };

  // 5. 메시지 수정 완료 🌟
  const handleUpdate = async (id: string) => {
    if (!editName.trim() || !editContent.trim()) return;

    try {
      const msgRef = doc(db, "messages", id);
      await updateDoc(msgRef, {
        name: editName,
        content: editContent,
        date: new Date().toLocaleString("ko-KR") + " (수정됨)",
      });
      setEditingId(null);
      fetchMessages();
    } catch (error) {
      alert("수정 실패!");
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-[#373a3c]">
      <Header />

      <main className="max-w-[1000px] mx-auto bg-white min-h-screen shadow-sm p-4 md:p-8 my-0 md:my-4 border-x border-[#ddd]">
        <header className="border-b border-[#ccc] mb-6 pb-2">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">
            윤준 생일 축하 게시판
          </h1>
          <Link href="/" className="text-[#0275d8] text-sm hover:underline">
            ↪ 윤준 문서로 돌아가기
          </Link>
        </header>

        {/* 입력 폼 */}
        <div className="bg-[#f0f5fa] border border-[#82b5df] p-4 mb-8 rounded-sm">
          <h2 className="font-bold text-[#0275d8] mb-3">새 토론 남기기</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              className="border border-[#ccc] p-1.5 text-sm w-48 rounded-sm outline-none focus:border-[#0275d8]"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="축하 메시지를 입력하세요"
              className="border border-[#ccc] p-2 text-sm h-20 rounded-sm outline-none focus:border-[#0275d8] resize-none"
            />
            <button
              type="submit"
              className="bg-[#0275d8] text-white font-bold py-1.5 px-6 self-end text-sm hover:bg-[#025aa5]"
            >
              등록
            </button>
          </form>
        </div>

        {/* 목록 */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg border-b border-[#ccc] pb-1 mb-4">
            현재 진행 중인 토론
          </h3>
          {isLoading ? (
            <p className="text-center py-10 text-gray-400">불러오는 중...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={msg.id}
                className="border border-[#ccc] bg-white text-[14px]"
              >
                {/* 헤더: 이름, 날짜, 버튼 */}
                <div className="bg-[#f5f5f5] border-b border-[#ccc] p-2 px-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0275d8]">
                      #{messages.length - index} {msg.name}
                    </span>
                    <span className="text-[11px] text-gray-500">
                      {msg.date}
                    </span>
                  </div>
                  {/* 수정/삭제 버튼 */}
                  <div className="flex gap-2 text-[11px]">
                    <button
                      onClick={() => startEdit(msg)}
                      className="text-gray-500 hover:text-[#0275d8]"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      삭제
                    </button>
                  </div>
                </div>

                {/* 본문: 수정 중일 때와 아닐 때 분기 */}
                <div className="p-4">
                  {editingId === msg.id ? (
                    <div className="flex flex-col gap-2">
                      <input
                        className="border p-1 text-sm outline-none"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                      <textarea
                        className="border p-2 text-sm h-20 outline-none resize-none"
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingId(null)}
                          className="text-xs bg-gray-200 px-3 py-1"
                        >
                          취소
                        </button>
                        <button
                          onClick={() => handleUpdate(msg.id)}
                          className="text-xs bg-[#0275d8] text-white px-3 py-1"
                        >
                          저장
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap leading-relaxed text-gray-800">
                      {msg.content}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
