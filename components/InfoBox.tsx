import React from "react";
import { InfoRow } from "./WikiLayout";

export default function InfoBox() {
  return (
    <aside className="w-full md:w-[400px] shrink-0 border border-[#00a495] overflow-hidden shadow-sm bg-white text-[13px]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#00a495] text-white text-center">
            <th colSpan={2} className="py-5">
              <span className="text-2xl font-bold">윤준</span>
              <br />
              <div className="mt-1 flex justify-center items-center gap-2 opacity-90 text-[12px] font-normal tracking-wide">
                <span>JUN YUN</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="p-0 border-b border-[#ddd] bg-[#eee]">
              <img
                src="/yunjun.jpg"
                alt="profile"
                className="w-full h-auto max-h-[500px] object-cover mx-auto"
              />
            </td>
          </tr>
          <InfoRow label="본관" value="파평 윤씨 (坡平 尹氏)" />
          <InfoRow label="출생" value={"1997년 4월 7일 (29세)\n울산광역시"} />
          <InfoRow label="거주지" value="미국 오리건주 유진" />
          <InfoRow label="MBTI" value="ISFP" />
          <InfoRow label="신체 특징" value="176cm 68kg" />
          <InfoRow
            label="학력"
            value={
              "울산대학교 피아노과 (졸업)\nUniversity of Oregon 석사 (졸업)\nUniversity of Oregon 박사 (2027년 졸업 예정)"
            }
          />
          <InfoRow
            label="가족관계"
            value="부모님, 여동생 두명: 윤다영(1999년생), 윤예영(2002년생)"
          />
          <InfoRow label="종교" value="개신교" />
          <InfoRow label="애견묘" value="은비, 커피" />
          <InfoRow label="별명" value="캔디맨" />
          <tr className="border-b border-[#ddd]">
            <th className="bg-[#00a495] text-white w-[100px] py-3 px-3 text-[11px] font-bold text-center">
              사인
            </th>
            <td className="py-4 px-4 text-center bg-white">
              <img
                src="/signature.png"
                alt="사인"
                className="h-16 mx-auto object-contain"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
