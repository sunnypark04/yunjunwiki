"use client";
import React from "react";
import { footnoteData } from "../data/footnotes";

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

export function SubSection({
  id,
  prefix,
  title,
  children,
  isOpen,
  onToggle,
}: any) {
  return (
    <div id={id} className="mt-8 mb-4">
      <div
        className="flex justify-between items-center border-b border-[#ccc] mb-4 pb-1 group px-1 cursor-pointer hover:bg-gray-50"
        onClick={onToggle}
      >
        <h3 className="text-[18px] font-bold text-black flex items-center">
          <span
            className={`mr-2 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}
          >
            ⌵
          </span>
          <span className="text-[#0275d8] mr-1.5">{prefix}</span> {title}
        </h3>
        <span className="text-[11px] text-[#0275d8] opacity-0 group-hover:opacity-100">
          [편집]
        </span>
      </div>
      {isOpen && (
        <div className="text-gray-800 leading-relaxed px-1 animate-fadeIn">
          {children}
        </div>
      )}
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

export function FnItem({
  num,
  children,
}: {
  num: number;
  children: React.ReactNode;
}) {
  return (
    <div id={`fn-${num}`} className="flex items-start pt-1">
      <a
        href={`#fn-ref-${num}`}
        className="text-[#0275d8] font-medium mr-2 hover:underline shrink-0"
      >
        [{num}]
      </a>
      <span className="text-gray-700">{children}</span>
    </div>
  );
}

export function FnLink({ num }: { num: number }) {
  const footnote = footnoteData.find((fn: any) => fn.id === num);

  return (
    <sup className="relative inline-block group text-[11px] ml-[0.5px] align-super hover:z-[999]">
      <a
        href={`#fn-${num}`}
        id={`fn-ref-${num}`}
        className="text-[#0275d8] hover:underline cursor-pointer"
      >
        [{num}]
      </a>

      {footnote && (
        <span className="absolute bottom-[140%] left-1/2 -translate-x-1/2 mb-1 w-max max-w-[280px] bg-white border border-[#ccc] shadow-md p-2.5 rounded-sm text-[13px] text-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999] text-left pointer-events-none leading-relaxed font-sans whitespace-normal font-normal">
          <span className="text-[#0275d8] mr-1">[{num}]</span>
          {footnote.text}

          <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-[#ccc]"></span>
          <span className="absolute top-[calc(100%-1.5px)] left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white"></span>
        </span>
      )}
    </sup>
  );
}
