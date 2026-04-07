import React from "react";

export default function TableOfContents() {
  return (
    <nav className="w-full md:w-[280px] border border-[#ddd] bg-[#fafafa] p-4 shrink-0">
      <div className="font-bold border-b border-[#ddd] mb-3 pb-1 text-center text-[15px] text-[#373a3c]">
        목차
      </div>
      <ol className="list-decimal list-inside space-y-1.5 text-[#0275d8] text-[14px]">
        <li>
          <a href="#1" className="hover:underline">
            개요
          </a>
        </li>
        <li>
          <a href="#2" className="hover:underline">
            생애 및 활동
          </a>
          <ul className="pl-6 list-none space-y-1 mt-1 text-[13px]">
            <li>
              <a href="#2.1" className="hover:underline">
                2.1. 학문적 행보
              </a>
            </li>
            <li>
              <a href="#2.2" className="hover:underline">
                2.2. 교회 생활
              </a>
            </li>
            <li>
              <a href="#2.3" className="hover:underline">
                2.3. 취미 활동
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#3" className="hover:underline">
            수상경력
          </a>
        </li>
        <li>
          <a href="#4" className="hover:underline">
            특징 및 성격
          </a>
        </li>
        <li>
          <a href="#5" className="hover:underline">
            논란 및 사건사고
          </a>
        </li>
        <li>
          <a href="#6" className="hover:underline">
            여담
          </a>
        </li>
      </ol>
    </nav>
  );
}
