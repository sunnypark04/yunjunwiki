'use client';

import React, { useState } from 'react';
import Header from '../components/Header';

export default function YunJunWiki() {
  const [isAwardOpen, setIsAwardOpen] = useState(true);
  
  // 섹션별 접기/펼치기 상태 관리
  const [openSections, setOpenSections] = useState({
    s1: true, s2: true, s3: true, s4: true, s5: true, s6: true, s7: true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id as keyof typeof prev] }));
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-[#373a3c]">
      <Header />

      <main className="max-w-[1200px] mx-auto bg-white min-h-screen shadow-sm p-4 md:p-8 my-0 md:my-4 border-x border-[#ddd]">
        
        {/* 분류 섹션 */}
        <div className="border border-[#ddd] p-2 mb-4 bg-[#f5f5f5] text-[13px] flex flex-wrap gap-x-2 gap-y-1">
          <span className="font-bold">분류:</span>
          <span className="text-[#0275d8] hover:underline cursor-pointer">윤준</span> |
          <span className="text-[#0275d8] hover:underline cursor-pointer">피아니스트</span> |
          <span className="text-[#0275d8] hover:underline cursor-pointer">박사</span> |
          <span className="text-[#0275d8] hover:underline cursor-pointer">미국유학생</span> |
          <span className="text-[#0275d8] hover:underline cursor-pointer">1997년 출생</span> |
          <span className="text-[#0275d8] hover:underline cursor-pointer">파평 윤씨</span>
        </div>

        {/* 상단 알림창 */}
        <div className="border border-[#ddd] p-4 mb-6 flex items-center gap-4 bg-[#f5f5f5] text-sm">
          <div className="text-2xl text-[#00a495]">🎹</div>
          <div>
            <p>이 문서는 피아니스트 <b>윤준</b>에 관한 문서입니다.</p>
            <p className="text-xs text-gray-500 italic">Created by 박선이 이상아 윤예린</p>
          </div>
        </div>

        {/* 메인 타이틀 */}
        <header className="border-b border-[#ccc] mb-8 pb-1 flex justify-between items-end">
          <h1 className="text-3xl md:text-[34px] font-bold text-black px-1">윤준</h1>
          <div className="text-[11px] text-gray-400 pb-1">최근 수정 시각: 2026-04-07 01:55:00</div>
        </header>

        {/* 상단 레이아웃: 목차 & 인포박스 */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-12 items-start">
          
          {/* 목차 */}
          <nav className="w-full md:w-[280px] border border-[#ddd] bg-[#fafafa] p-4 shrink-0">
            <div className="font-bold border-b border-[#ddd] mb-3 pb-1 text-center text-[15px] text-[#373a3c]">목차</div>
            <ol className="list-decimal list-inside space-y-1.5 text-[#0275d8] text-[14px]">
              <li><a href="#1" className="hover:underline">개요</a></li>
              <li><a href="#2" className="hover:underline">생애 및 활동</a>
                {/* 하위 목차 번호 수정: list-none 적용 */}
                <ul className="pl-6 list-none space-y-1 mt-1 text-[13px]">
                  <li><a href="#2.1" className="hover:underline">2.1. 학문적 행보</a></li>
                  <li><a href="#2.2" className="hover:underline">2.2. 교회 생활</a></li>
                  <li><a href="#2.3" className="hover:underline">2.3. 취미 활동</a></li>
                </ul>
              </li>
              <li><a href="#3" className="hover:underline">수상경력</a></li>
              <li><a href="#4" className="hover:underline">특징 및 성격</a></li>
              <li><a href="#5" className="hover:underline">논란 및 사건사고</a></li>
              <li><a href="#6" className="hover:underline">여담</a></li>
              <li><a href="#7" className="hover:underline">관련 문서</a></li>
            </ol>
          </nav>

          {/* 인포박스 */}
          <aside className="w-full md:w-[400px] border border-[#00a495] shrink-0 overflow-hidden shadow-sm bg-white text-[13px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#00a495] text-white text-center">
                  <th colSpan={2} className="py-5">
                    <span className="text-2xl font-bold">윤준</span>
                    <a href="#fn-1" id="fn-ref-1" className="text-white text-xs align-top ml-1 font-normal">[1]</a>
                    <br/>
                    <div className="mt-1 flex justify-center items-center gap-2 opacity-90 text-[12px] font-normal tracking-wide">
                      <span>JUN YUN</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="p-0 border-b border-[#ddd] bg-[#eee]">
                    <img src="/yunjun.jpg" alt="profile" className="w-full h-auto max-h-[500px] object-cover mx-auto" />
                  </td>
                </tr>
                <InfoRow label="본관" value="파평 윤씨 (坡平 尹氏)" />
                <InfoRow label="출생" value={'1997년 4월 7일 (29세)\n울산광역시'} />
                <InfoRow label="거주지" value="미국 오리건주 유진" />
                <InfoRow label="MBTI" value="ISFP" />
                <InfoRow label="신체" value="176cm" />
                <InfoRow label="학력" value={"울산대학교 (수석 입학 / 졸업)\nUniversity of Oregon (박사 재학)"} />
                <InfoRow label="가족" value="부모님, 여동생(윤다영, 윤예영)" />
                <InfoRow label="종교" value="개신교" />
                <InfoRow label="애견묘" value="은비, 커피" />
                <InfoRow label="별명" value="슈가맨" />
                <tr className="border-b border-[#ddd]">
                  <th className="bg-[#00a495] text-white w-[100px] py-3 px-3 text-[11px] font-bold text-center">사인</th>
                  <td className="py-4 px-4 text-center bg-white">
                    <img src="/signature.png" alt="사인" className="h-16 mx-auto object-contain" />
                  </td>
                </tr>
              </tbody>
            </table>
          </aside>
        </div>

        {/* 본문 영역 */}
        <div className="w-full leading-relaxed border-t pt-10">
          
          <Section id="1" prefix="1." title="개요" isOpen={openSections.s1} onToggle={() => toggleSection('s1')}>
            <p>대한민국의 피아니스트. 1997년생으로 현재 미국 오리건주 유진(Eugene) 지역을 중심으로 활동하며 박사 과정을 이수 중이다. 압도적인 실력과 성실함을 겸비하여 촉망받는 신예 연주자다.</p>
          </Section>

          <Section id="2" prefix="2." title="생애 및 활동" isOpen={openSections.s2} onToggle={() => toggleSection('s2')}>
            <SubSection id="2.1" prefix="2.1." title="학문적 행보">
              <p className="font-bold mb-2 underline">학력</p>
              <p className="mb-4">울산대학교 피아노과에 수석으로 입학하며 일찍이 두각을 나타냈다. 이후 미국 University of Oregon(UO)으로 건너가 Alexandre Dossin 교수 밑에서 박사 과정을 밟고 있다. 사실상 교수님의 "애제자" 일 만큼 실력에 기반한 신뢰가 두텁다.</p>
              <p className="mb-4 text-gray-700">박사과정 5년 차로 음악분야에 대한 깊은 전공 지식을 보유하고 있다. 실제 음악도 대중음악 하나 듣지 않고 클래식만 듣는다고 한다. 음악사, 음악이론, 실연주 실력은 당연? 하고 ? 학교 내 반주, 교회 반주, 리사이틀 콩쿨 등 자신의 커리어를 쌓아가고 있으며 다수의 티칭 경험을 보유하고 있다.</p>
            </SubSection>

            <SubSection id="2.2" prefix="2.2." title="교회 생활">
              <p className="mb-2"><b>찬양팀:</b> 유진한인교회 메인 반주자로 매주 섬기며 유진교회의 심장이라고 할 수 있다.</p>
              <p><b>그외:</b> 아기들 사이에서 삼촌역할을 하며 애기들 놀아주기를 맡고 있다.</p>
            </SubSection>

            <SubSection id="2.3" prefix="2.3." title="취미 활동">
              <p className="mb-4">미술에 대한 깊은 조예, 꾸준한 런닝으로 다져진 체력을 모두 가지고 있는, 예체능의 모든 분야를 섭렵한 팔방미인이시다.</p>
              <p className="mb-4">4월에 개최되는 하프마라톤을 나가려 했을 정도로 상당한 런닝광으로 알려져있다. 심지어 예중 예고 출신이 아닌 인문계 출신으로 미적분과 확통까지 다 뗐으며 천문학 물리학에 관심이 많아 혼자 관련 서적을 찾아 공부하기도 할 정도로 예술계 인재 중 상당한 엘리트과라 할 수 있다.</p>
              <p className="mb-4">독서를 꾸준한 취미로 삼고 있는데, 작년에는 ‘이방인’을 재밌게 읽었다고 한다. 이외에도 참을 수 없는 존재의 가벼움, 인간 실격, 변신, 설국 등 굵직한 작품들을 읽고 주변인에게 추천까지 해주며 독서광의 면모를 보였다.</p>
              <p className="mb-4">언어를 배우는 것에도 관심이 많아, 2025년에는 JLPT N3 를 취득했다. 추후에는 프랑스어와 독일어도 배울 예정이라고 한다.</p>
              <p>여행을 매우 좋아한다. 미국에 5년 거주하며 센프란시스코, 시애틀, 시카고, 플로리다, 뉴욕, 케나다 등 다수의 지역으로 여행을 다녀온 바 있다.</p>
            </SubSection>
          </Section>

          {/* 수상경력 표 스타일 재구성 */}
          <Section id="3" prefix="3." title="수상경력" isOpen={openSections.s3} onToggle={() => toggleSection('s3')}>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-[13.5px] border-collapse border-t-[3px] border-[#82b5df] border-b-[3px] border-[#ccc]">
                <thead>
                  <tr className="bg-[#82b5df] text-white">
                    <th className="py-2.5 px-3 border-r border-white/30 font-bold whitespace-nowrap w-[12%]">연도</th>
                    <th className="py-2.5 px-3 border-r border-white/30 font-bold w-[38%]">대회 및 공연명</th>
                    <th className="py-2.5 px-3 border-r border-white/30 font-bold w-[30%]">부문/내용</th>
                    <th className="py-2.5 px-3 font-bold w-[20%]">결과 및 비고</th>
                  </tr>
                </thead>
                <tbody className="text-center text-gray-800">
                  
                  {/* 학부 시절 */}
                  <tr className="bg-[#f0f5fa]">
                    <td colSpan={4} className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]">학부 시절</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white text-gray-500 whitespace-nowrap">연도 미상</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">뮤지컬콩쿠르 / 한국음악협회콩쿠르</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">대학부</td>
                    <td className="py-3 px-2 bg-white text-[#d9534f] font-bold">1위</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white text-gray-500 whitespace-nowrap">연도 미상</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">울산대학교 피아노페스티벌</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">-</td>
                    <td className="py-3 px-2 bg-white">다수 출연</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white text-gray-500 whitespace-nowrap">연도 미상</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">USP 오케스트라 / 울산중구심포니오케스트라</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">-</td>
                    <td className="py-3 px-2 bg-white text-[#0275d8]">협연</td>
                  </tr>

                  {/* 2020년 */}
                  <tr className="bg-[#f0f5fa]">
                    <td colSpan={4} className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]">2020년</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">2020년</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">삼익문화재단 재능나눔아티스트 연주회</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">서울 삼익아트홀</td>
                    <td className="py-3 px-2 bg-white">연주</td>
                  </tr>

                  {/* 2021년 */}
                  <tr className="bg-[#f0f5fa]">
                    <td colSpan={4} className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]">2021년</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">2021년</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">리스트 탄생기념 헝가리안 페스티벌</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">전국 연주</td>
                    <td className="py-3 px-2 bg-white">참여</td>
                  </tr>

                  {/* 2022년 */}
                  <tr className="bg-[#f0f5fa]">
                    <td colSpan={4} className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]">2022년</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td rowSpan={4} className="py-3 px-2 border-r border-[#ddd] bg-white align-middle">2022년</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">University of Oregon Concerto/Aria Competition</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">-</td>
                    <td className="py-3 px-2 bg-white text-[#d9534f] font-bold">우승</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">Eugene Symphony Guild Young Artist Competition</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">Senior 부문</td>
                    <td className="py-3 px-2 bg-white text-[#d9534f] font-bold">1위</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">Los Angeles International Liszt Competition</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">Division X 부문</td>
                    <td className="py-3 px-2 bg-white font-bold text-[#333]">Honorable Mention</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">MTNA Competition</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">Young Artist 부문 (오리건주)</td>
                    <td className="py-3 px-2 bg-white text-[#d9534f] font-bold">1위</td>
                  </tr>

                  {/* 석사 학위 과정 중 */}
                  <tr className="bg-[#f0f5fa]">
                    <td colSpan={4} className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]">석사 재학 중</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white whitespace-nowrap text-gray-500">기간 중</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">University of Oregon Orchestra / Eugene Symphony</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">-</td>
                    <td className="py-3 px-2 bg-white text-[#0275d8]">협연</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white text-gray-500 whitespace-nowrap">졸업 시</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">Specialization in Collaborative Piano</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white">David Riley 사사 / 실내악 리사이틀 2회</td>
                    <td className="py-3 px-2 bg-white font-bold">취득</td>
                  </tr>

                  {/* 2026년 */}
                  <tr className="bg-[#f0f5fa]">
                    <td colSpan={4} className="py-1.5 font-bold text-[#6297ce] border-y border-[#ddd]">2026년</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td rowSpan={2} className="py-3 px-2 border-r border-[#ddd] bg-white align-middle">2026년</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4">MTNA Competition</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4">Young Artist 부문<br/><span className="text-xs text-gray-500">오리건주 및 6개 주 Division</span></td>
                    <td className="py-3 px-2 bg-white text-[#d9534f] font-bold leading-relaxed">1위<br/><span className="text-xs font-normal text-gray-600">(National Finalist)</span></td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4">MTNA 콩쿨 결승</td>
                    <td className="py-3 px-2 border-r border-[#ddd] bg-white text-left pl-4">시카고</td>
                    <td className="py-3 px-2 bg-white">3월 23일 결승</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </Section>

          <Section id="4" prefix="4." title="특징 및 성격" isOpen={openSections.s4} onToggle={() => toggleSection('s4')}>
            <p className="mb-4">30대로 접어드는 나이에도 불구하고 어린 친구들과 함께 생활하는 것에 능숙해 그런지 상당한 느좋남의 분위기를 풍기곤 한다. 특히 인스타그램을 살펴보면 그의 독보적인 미적 감각과 사진 실력을 엿볼 수 있다. 본인 셀카보단 풍경 사진이 많은 편이다.</p>
            <p>사실 mz 세대 못지 않은 트렌디함을 갖추면서도 (개인 인스타, 유튜브도 활발히 하는 중) 하도 놀려대는 어린 친구들의 아재라이팅에 스스로 늙은이 취급을 하곤 한다.</p>
          </Section>

          <Section id="5" prefix="5." title="논란 및 사건사고" isOpen={openSections.s5} onToggle={() => toggleSection('s5')}>
            <h4 className="font-bold text-lg mb-4 mt-2">준이통(Jun-Iy-Tong) 사태</h4>
            <p className="mb-4">2025년 11월, 준이통(Jun-Iy-Tong)이라는 대대적인 질병을 퍼뜨린 바 있다. 주요 감염원인은 11월 23일에 진행된 리사이틀 공연으로, 공연 이후 해당 질병을 호소하는 환자가 발생했다.</p>
            <p className="mb-4">감염 증상은 주로 두통 및 흉통으로 나타난다. 특히, 준이를 직접 보거나 준이 없이 준이토크를 할 때, 준이 때문에 미치겠는 느낌이 확 오면서 머리가 아프고, 가슴이 답답해진다. 이후, 이성이 흐려져 밤티 멘트 혹은 행동을 하게 된다.</p>
            <p>본인 스스로 환자들의 질병을 극대화하는 행동을 하기도 했다. 대표적으로 (1) 선이 피아노 레슨 및 라이딩 (2) 상아 스토리 답장 및 녹음/영상본 공유 등이 있다.</p>
          </Section>

          <Section id="6" prefix="6." title="여담" isOpen={openSections.s6} onToggle={() => toggleSection('s6')}>
            <ul className="list-disc list-inside space-y-2 ml-1">
              <li><b>입시썰:</b> 준비 중...</li>
              <li><b>군대썰:</b> 준비 중...</li>
              <li><b>그외 짜그리들:</b> <span className="text-gray-500 italic">내용 업데이트 예정</span></li>
            </ul>
          </Section>

          <Section id="7" prefix="7." title="관련 문서" isOpen={openSections.s7} onToggle={() => toggleSection('s7')}>
            <ul className="list-disc list-inside text-[#0275d8]">
              <li className="cursor-pointer hover:underline">피아니스트</li>
              <li className="cursor-pointer hover:underline">유진한인교회</li>
            </ul>
          </Section>

          {/* 각주 영역 폰트 크기 및 간격 디자인 수정 */}
          <footer className="mt-20 pt-6 pb-12 border-t-2 border-[#ccc] text-[14px] text-gray-800 leading-relaxed space-y-3">
            <div id="fn-1" className="flex items-start">
              <a href="#fn-ref-1" className="text-[#0275d8] font-medium mr-2 hover:underline shrink-0">[1]</a>
              <span>말 그대로 원래 <b>윤준혁</b>이라는 이름이 될 뻔하다가 '혁'이 빠졌다고 한다.</span>
            </div>
            {/* 추가 각주가 필요하다면 아래와 같은 형식으로 추가합니다. */}
            {/* <div id="fn-2" className="flex items-start">
              <a href="#fn-ref-2" className="text-[#0275d8] font-medium mr-2 hover:underline shrink-0">[2]</a>
              <span>여담으로 여기에 추가 각주 내용을 적습니다.</span>
            </div>
            */}
          </footer>
        </div>
      </main>
    </div>
  );
}

// 헬퍼 컴포넌트: 메인 섹션
function Section({ id, prefix, title, children, isOpen, onToggle }: any) {
  return (
    <section id={id} className="mb-14 text-[15px]">
      <div 
        className="flex justify-between items-center border-b border-[#ccc] mb-4 pb-1 cursor-pointer group hover:bg-gray-50 px-1"
        onClick={onToggle}
      >
        <h2 className="text-[22px] font-bold text-black flex items-center">
          <span className={`mr-2 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-0' : '-rotate-90'}`}>⌵</span>
          <span className="text-[#0275d8] mr-1.5">{prefix}</span> {title}
        </h2>
        <span className="text-[11px] text-[#0275d8] opacity-0 group-hover:opacity-100">[편집]</span>
      </div>
      {isOpen && <div className="px-1 animate-fadeIn">{children}</div>}
    </section>
  );
}

// 헬퍼 컴포넌트: 서브 섹션
function SubSection({ id, prefix, title, children }: any) {
  return (
    <div id={id} className="mt-8 mb-4">
      <div className="flex justify-between items-center border-b border-[#ccc] mb-4 pb-1 group px-1">
        <h3 className="text-[18px] font-bold text-black flex items-center">
          <span className="mr-2 text-gray-400">⌵</span>
          <span className="text-[#0275d8] mr-1.5">{prefix}</span> {title}
        </h3>
        <span className="text-[11px] text-[#0275d8] opacity-0 group-hover:opacity-100 cursor-pointer">[편집]</span>
      </div>
      <div className="text-gray-800 leading-relaxed px-1">{children}</div>
    </div>
  );
}

// 헬퍼 컴포넌트: 인포박스 로우
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-[#ddd]">
      <th className="bg-[#00a495] text-white w-[100px] py-3 px-3 text-[11px] font-bold text-center align-middle whitespace-nowrap">{label}</th>
      <td className="py-3 px-4 text-gray-700 whitespace-pre-wrap leading-snug">{value}</td>
    </tr>
  );
}