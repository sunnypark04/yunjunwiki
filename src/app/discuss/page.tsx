"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/Header";
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
import { db } from "../../lib/firebase"; // 경로에 맞게 조절 (@/lib/firebase)

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

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editContent, setEditContent] = useState("");

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

  // 🌟 [핵심 변경] 누르자마자 즉시 반영 (Optimistic Update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    // 1. 화면에 먼저 보여줄 임시 데이터 생성
    const optimisticMessage: Message = {
      id: "temp-" + Date.now(), // 임시 ID
      name,
      content,
      date: new Date().toLocaleString("ko-KR"),
      timestamp: Date.now(),
    };

    // 2. 화면에 즉시 띄우고 입력창 비우기 (체감속도 0.1초!)
    setMessages((prev) => [optimisticMessage, ...prev]);
    setName("");
    setContent("");

    // 3. 백그라운드에서 진짜 DB에 저장 시도
    try {
      await addDoc(collection(db, "messages"), {
        name: optimisticMessage.name,
        content: optimisticMessage.content,
        date: optimisticMessage.date,
        timestamp: optimisticMessage.timestamp,
      });
      // DB 저장이 완료되면, 완벽한 동기화를 위해 목록을 한 번 갱신해줍니다.
      fetchMessages();
    } catch (error) {
      console.error("DB 에러:", error);
      alert("DB 저장에 실패했습니다. Firebase 설정을 확인해주세요!");
    }
  };

  // 삭제 함수
  const handleDelete = async (id: string) => {
    if (!confirm("정말 이 메시지를 삭제할까요?")) return;

    // 화면에서 즉시 지우기
    setMessages((prev) => prev.filter((msg) => msg.id !== id));

    try {
      await deleteDoc(doc(db, "messages", id));
    } catch (error) {
      alert("삭제 실패!");
      fetchMessages(); // 실패하면 다시 원상복구
    }
  };

  // 수정 관련 함수
  const startEdit = (msg: Message) => {
    setEditingId(msg.id);
    setEditName(msg.name);
    setEditContent(msg.content);
  };

  const handleUpdate = async (id: string) => {
    if (!editName.trim() || !editContent.trim()) return;

    const updatedDate = new Date().toLocaleString("ko-KR") + " (수정됨)";

    // 화면 즉시 수정 반영
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id
          ? { ...msg, name: editName, content: editContent, date: updatedDate }
          : msg,
      ),
    );
    setEditingId(null);

    try {
      const msgRef = doc(db, "messages", id);
      await updateDoc(msgRef, {
        name: editName,
        content: editContent,
        date: updatedDate,
      });
    } catch (error) {
      alert("수정 실패!");
      fetchMessages();
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
            <p className="text-center py-10 text-gray-400">
              데이터를 불러오는 중...
            </p>
          ) : messages.length === 0 ? (
            <p className="text-center py-10 text-gray-400 bg-gray-50 border border-[#ddd]">
              아직 등록된 메시지가 없습니다.
            </p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={msg.id}
                className="border border-[#ccc] bg-white text-[14px]"
              >
                <div className="bg-[#f5f5f5] border-b border-[#ccc] p-2 px-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#0275d8]">
                      #{messages.length - index} {msg.name}
                    </span>
                    <span className="text-[11px] text-gray-500">
                      {msg.date}
                    </span>
                  </div>
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
