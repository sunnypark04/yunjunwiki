"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/Header";
// 메시지 타입 정의
interface Message {
  id: string;
  name: string;
  content: string;
  date: string;
}

export default function DiscussPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  // 처음에 저장된 메시지 불러오기 (현재는 로컬 스토리지 사용)
  useEffect(() => {
    const saved = localStorage.getItem("birthdayMessages");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  // 메시지 등록 함수
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      name: name,
      content: content,
      date: new Date().toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    localStorage.setItem("birthdayMessages", JSON.stringify(updatedMessages)); // 임시 저장

    // 입력창 초기화
    setName("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-[#373a3c]">
      {/* 🌟 기존 하드코딩된 헤더를 지우고 메인 페이지와 동일한 Header 컴포넌트 삽입 */}
      <Header />

      <main className="max-w-[1000px] mx-auto bg-white min-h-screen shadow-sm p-4 md:p-8 my-0 md:my-4 border-x border-[#ddd]">
        {/* 토론창 헤더 */}
        <header className="border-b border-[#ccc] mb-6 pb-2">
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl md:text-3xl font-bold text-black">
              윤준 생일 축하 게시판
            </h1>
          </div>
          <Link href="/" className="text-[#0275d8] text-sm hover:underline">
            ↪ 윤준 문서로 돌아가기
          </Link>
        </header>

        {/* 메시지 입력 폼 */}
        <div className="bg-[#f0f5fa] border border-[#82b5df] p-4 mb-8 rounded-sm">
          <h2 className="font-bold text-[#0275d8] mb-3">새 토론 남기기</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <label className="text-sm font-bold w-12">이름:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="닉네임 또는 이름"
                className="border border-[#ccc] p-1.5 text-sm w-48 rounded-sm focus:outline-none focus:border-[#0275d8]"
                maxLength={20}
              />
            </div>
            <div className="flex gap-2 items-start">
              <label className="text-sm font-bold w-12 mt-1">내용:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="윤준에게 한마디"
                className="border border-[#ccc] p-2 text-sm flex-1 h-24 rounded-sm focus:outline-none focus:border-[#0275d8] resize-none"
              />
            </div>
            <div className="flex justify-end mt-1">
              <button
                type="submit"
                className="bg-[#0275d8] text-white font-bold py-1.5 px-6 rounded-sm text-sm hover:bg-[#025aa5] transition-colors"
              >
                등록
              </button>
            </div>
          </form>
        </div>

        {/* 토론 스레드 (메시지 목록) */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg border-b border-[#ccc] pb-1 mb-4">
            현재 진행 중인 토론
          </h3>

          {messages.length === 0 ? (
            <p className="text-gray-500 text-center py-10 bg-gray-50 border border-[#ddd] text-sm">
              아직 등록된 메시지가 없습니다. 첫 번째 축하를 남겨주세요!
            </p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={msg.id}
                className="border border-[#ccc] bg-white text-[14px]"
              >
                {/* 작성자 및 시간 헤더 */}
                <div className="bg-[#f5f5f5] border-b border-[#ccc] p-2 px-3 flex justify-between items-center text-[12px] text-gray-600">
                  <span className="font-bold text-[#0275d8]">
                    #{messages.length - index} {msg.name}
                  </span>
                  <span>{msg.date}</span>
                </div>
                {/* 메시지 내용 */}
                <div className="p-4 whitespace-pre-wrap leading-relaxed text-gray-800">
                  {msg.content}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
