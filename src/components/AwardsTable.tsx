// 컴포넌트로 분리된 수상경력 표
export function AwardsTable() {
  return (
    <div className="overflow-x-auto mt-2">
      <table className="w-full text-[13.5px] border-collapse border-t-[3px] border-[#82b5df] border-b-[3px] border-[#ccc]">
        <thead>
          <tr className="bg-[#82b5df] text-white">
            <th className="py-2.5 px-3 border-r border-white/30 font-bold whitespace-nowrap w-[12%]">
              연도
            </th>
            <th className="py-2.5 px-3 border-r border-white/30 font-bold w-[38%]">
              대회 및 공연명
            </th>
            <th className="py-2.5 px-3 border-r border-white/30 font-bold w-[30%]">
              부문/내용
            </th>
            <th className="py-2.5 px-3 font-bold w-[20%]">결과 및 비고</th>
          </tr>
        </thead>
        <tbody className="text-center text-gray-800">
          {/* 학부 시절 */}
          <tr className="bg-[#f0f5fa]">
            <td
              colSpan={4}
              className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]"
            >
              학부 시절
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-gray-500 whitespace-nowrap">
              연도 미상
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              뮤지컬콩쿠르 / 한국음악협회콩쿠르
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              대학부
            </td>
            <td className="py-3 px-2 bg-white text-[#d9534f] font-bold">1위</td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-gray-500 whitespace-nowrap">
              연도 미상
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              울산대학교 피아노페스티벌
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">-</td>
            <td className="py-3 px-2 bg-white">다수 출연</td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-gray-500 whitespace-nowrap">
              연도 미상
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              USP 오케스트라 / 울산중구심포니오케스트라
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">-</td>
            <td className="py-3 px-2 bg-white text-[#0275d8]">협연</td>
          </tr>

          {/* 2020년 */}
          <tr className="bg-[#f0f5fa]">
            <td
              colSpan={4}
              className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]"
            >
              2020년
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              2020년
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              삼익문화재단 재능나눔아티스트 연주회
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              서울 삼익아트홀
            </td>
            <td className="py-3 px-2 bg-white">연주</td>
          </tr>

          {/* 2021년 */}
          <tr className="bg-[#f0f5fa]">
            <td
              colSpan={4}
              className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]"
            >
              2021년
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              2021년
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              리스트 탄생기념 헝가리안 페스티벌
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              전국 연주
            </td>
            <td className="py-3 px-2 bg-white">참여</td>
          </tr>

          {/* 2022년 */}
          <tr className="bg-[#f0f5fa]">
            <td
              colSpan={4}
              className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]"
            >
              2022년
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td
              rowSpan={4}
              className="py-3 px-2 border-r border-[#ddd] bg-white align-middle"
            >
              2022년
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              University of Oregon Concerto/Aria Competition
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">-</td>
            <td className="py-3 px-2 bg-white text-[#d9534f] font-bold">
              우승
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              Eugene Symphony Guild Young Artist Competition
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              Senior 부문
            </td>
            <td className="py-3 px-2 bg-white text-[#d9534f] font-bold">1위</td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              Los Angeles International Liszt Competition
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              Division X 부문
            </td>
            <td className="py-3 px-2 bg-white font-bold text-[#333]">
              Honorable Mention
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              MTNA Competition
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              Young Artist 부문 (오리건주)
            </td>
            <td className="py-3 px-2 bg-white text-[#d9534f] font-bold">1위</td>
          </tr>

          {/* 2023년 (새로 추가) */}
          <tr className="bg-[#f0f5fa]">
            <td
              colSpan={4}
              className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]"
            >
              2023년
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white align-middle text-gray-700 whitespace-nowrap">
              8월 22일
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white font-bold text-[#333]">
              Jun Yun PIANO RECITAL
              <br />
              <span className="text-[12px] font-normal text-gray-500">
                윤준 피아노 독주회
              </span>
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4 text-[12px] leading-relaxed text-gray-700">
              <ul className="list-disc list-inside">
                <li>J. S. Bach English Suite No. 2</li>
                <li>F. Liszt Réminiscences de Norma</li>
                <li>S. Prokofiev Toccata, Op. 11</li>
                <li>B. Smetana Piano Trio in G minor</li>
              </ul>
            </td>
            <td className="py-3 px-2 bg-white text-[13px]">
              울산문화예술회관
              <br />
              소공연장
            </td>
          </tr>

          {/* 석사 재학 중 */}
          <tr className="bg-[#f0f5fa]">
            <td
              colSpan={4}
              className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]"
            >
              석사 재학 중
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white whitespace-nowrap text-gray-500">
              기간 중
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              University of Oregon Orchestra / Eugene Symphony
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">-</td>
            <td className="py-3 px-2 bg-white text-[#0275d8]">협연</td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-gray-500 whitespace-nowrap">
              졸업 시
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              Specialization in Collaborative Piano
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white">
              David Riley 사사 / 실내악 리사이틀 2회
            </td>
            <td className="py-3 px-2 bg-white font-bold">취득</td>
          </tr>

          {/* 2025년 (새로 추가) */}
          <tr className="bg-[#f0f5fa]">
            <td
              colSpan={4}
              className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]"
            >
              2025년
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white align-middle text-gray-700 whitespace-nowrap">
              11월 20일
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white font-bold text-[#333]">
              DMA Recital II
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4 text-[12px] leading-relaxed text-gray-700">
              <ul className="list-disc list-inside">
                <li>J.S. Bach Capriccio in B-flat Major</li>
                <li>L.v. Beethoven Piano Sonata No. 21</li>
                <li>F. Liszt Piano Sonata in B minor, S. 178</li>
              </ul>
            </td>
            <td className="py-3 px-2 bg-white text-[13px] text-gray-600">
              University of Oregon
              <br />
              <span className="text-[11px]">(준이통 진원지)</span>
            </td>
          </tr>

          {/* 2026년 */}
          <tr className="bg-[#f0f5fa]">
            <td
              colSpan={4}
              className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]"
            >
              2026년
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td
              rowSpan={2}
              className="py-3 px-2 border-r border-[#ddd] bg-white align-middle"
            >
              2026년
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4">
              MTNA Competition
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4">
              Young Artist 부문
              <br />
              <span className="text-xs text-gray-500">
                오리건주 및 6개 주 Division
              </span>
            </td>
            <td className="py-3 px-2 bg-white text-[#d9534f] font-bold leading-relaxed">
              1위
              <br />
              <span className="text-xs font-normal text-gray-600">
                (National Finalist)
              </span>
            </td>
          </tr>
          <tr className="border-b border-[#ddd]">
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4">
              MTNA 콩쿨 결승
            </td>
            <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4">
              시카고
            </td>
            <td className="py-3 px-2 bg-white">3월 23일 결승</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AwardsTable;
