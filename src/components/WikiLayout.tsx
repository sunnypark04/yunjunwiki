"use client";
import React from "react";

export function Section({
  id,
  prefix,
  title,
  children,
  isOpen,
  onToggle,
}: any) {
  return (
    <section id={id} className="mb-14 text-[15px]">
      <div
        className="flex justify-between items-center border-b border-[#ccc] mb-4 pb-1 cursor-pointer group hover:bg-gray-50 px-1"
        onClick={onToggle}
      >
        <h2 className="text-[22px] font-bold text-black flex items-center">
          <span
            className={`mr-2 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}
          >
            ⌵
          </span>
          <span className="text-[#0275d8] mr-1.5">{prefix}</span> {title}
        </h2>
        <span className="text-[11px] text-[#0275d8] opacity-0 group-hover:opacity-100">
          [편집]
        </span>
      </div>
      {isOpen && <div className="px-1 animate-fadeIn">{children}</div>}
    </section>
  );
}

export function SubSection({ id, prefix, title, children }: any) {
  return (
    <div id={id} className="mt-8 mb-4">
      <div className="flex justify-between items-center border-b border-[#ccc] mb-4 pb-1 group px-1">
        <h3 className="text-[18px] font-bold text-black flex items-center">
          <span className="mr-2 text-gray-400">⌵</span>
          <span className="text-[#0275d8] mr-1.5">{prefix}</span> {title}
        </h3>
        <span className="text-[11px] text-[#0275d8] opacity-0 group-hover:opacity-100 cursor-pointer">
          [편집]
        </span>
      </div>
      <div className="text-gray-800 leading-relaxed px-1">{children}</div>
    </div>
  );
}

export function InfoRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  // 👈 string에서 React.ReactNode로 변경
  return (
    <tr className="border-b border-[#ddd]">
      <th className="bg-[#00a495] text-white w-[100px] py-3 px-3 text-[11px] font-bold text-center align-middle whitespace-nowrap">
        {label}
      </th>
      <td className="py-3 px-4 text-gray-700 whitespace-pre-wrap leading-snug">
        {value}
      </td>
    </tr>
  );
}

export function FnLink({ num }: { num: number }) {
  return (
    <sup className="text-[11px] ml-[0.5px] align-super">
      <a
        href={`#fn-${num}`}
        id={`fn-ref-${num}`}
        className="text-[#0275d8] hover:underline"
      >
        [{num}]
      </a>
    </sup>
  );
}
