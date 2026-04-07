"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import AwardsTable from "../components/AwardsTable";
import InfoBox from "../components/InfoBox";
import TableOfContents from "../components/TableOfContents";
import { Section, SubSection, FnItem, FnLink } from "../components/WikiLayout"; // FnLink 추가 확인
import { footnoteData } from "../data/footnotes"; // 👈 이 경로가 맞는지 꼭 확인!

export default function YunJunWiki() {
  const [openSections, setOpenSections] = useState({
    s1: true,
    s2: true,
    s3: true,
    s4: true,
    s5: true,
    s6: true,
    s7: true,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-[#373a3c]">
      <Header />

      <main className="max-w-[1200px] mx-auto bg-white min-h-screen shadow-sm p-4 md:p-8 my-0 md:my-4 border-x border-[#ddd]">
        {/* 분류 섹션 */}
        <div className="border border-[#ddd] p-2 mb-4 bg-[#f5f5f5] text-[13px] flex flex-wrap gap-x-2 gap-y-1">
          <span className="font-bold">분류:</span>
          <span className="text-[#0275d8] hover:underline cursor-pointer">
            윤준
          </span>{" "}
          |
          <span className="text-[#0275d8] hover:underline cursor-pointer">
            <a
              href="https://namu.wiki/w/%ED%94%BC%EC%95%84%EB%8B%88%EC%8A%A4%ED%8A%B8
"
              className="text-[#0275d8] hover:underline"
            >
              피아니스트
            </a>
          </span>{" "}
          |
          <span className="text-[#0275d8] hover:underline cursor-pointer">
            <a
              href="https://namu.wiki/w/%EB%B0%95%EC%82%AC
"
              className="text-[#0275d8] hover:underline"
            >
              박사과정
            </a>
          </span>{" "}
          |
          <span className="text-[#0275d8] hover:underline cursor-pointer">
            <a
              href="https://namu.wiki/w/%EC%9C%A0%ED%95%99%EC%83%9D
"
              className="text-[#0275d8] hover:underline"
            >
              미국유학생
            </a>
          </span>{" "}
          |
          <span className="text-[#0275d8] hover:underline cursor-pointer">
            <a
              href="https://namu.wiki/w/1997%EB%85%84/%ED%83%84%EC%83%9D
"
              className="text-[#0275d8] hover:underline"
            >
              1997년 출생
            </a>
          </span>{" "}
          |
          <span className="text-[#0275d8] hover:underline cursor-pointer">
            <a
              href="https://namu.wiki/w/%ED%8C%8C%ED%8F%89%20%EC%9C%A4%EC%94%A8
"
              className="text-[#0275d8] hover:underline"
            >
              파평 윤씨
            </a>
          </span>
        </div>

        {/* 상단 알림창 */}
        <div className="border border-[#ddd] p-4 mb-6 flex items-center gap-4 bg-[#f5f5f5] text-sm">
          <div className="text-2xl text-[#00a495]">🎹</div>
          <div>
            <p>
              이 문서는 피아니스트 <b>윤준</b>에 관한 문서입니다.
            </p>
            <p className="text-xs text-gray-500 italic">
              Created by 박선이 이상아
            </p>
          </div>
        </div>

        {/* 메인 타이틀 */}
        <header className="border-b border-[#ccc] mb-8 pb-1 flex justify-between items-end">
          <h1 className="text-3xl md:text-[34px] font-bold text-black px-1">
            윤준
          </h1>
          <div className="text-[11px] text-gray-400 pb-1">
            최근 수정 시각: 2026-04-07 14:30:00
          </div>
        </header>

        {/* 상단 레이아웃: 목차 & 우측 패널 */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12 items-start">
          <TableOfContents />
          <InfoBox />
        </div>

        {/* 본문 영역 */}
        <div className="w-full leading-relaxed border-t pt-10">
          <Section
            id="1"
            prefix="1."
            title="개요"
            isOpen={openSections.s1}
            onToggle={() => toggleSection("s1")}
          >
            <p>
              대한민국의 피아니스트. 1997년생으로 현재 미국 오리건주{" "}
              <a
                href="https://namu.wiki/w/%EC%9C%A0%EC%A7%84(%EB%8F%84%EC%8B%9C)
"
                className="text-[#0275d8] hover:underline"
              >
                유진(Eugene)
              </a>
              지역을 중심으로 활동하며 박사 과정을 이수 중이다. 압도적인 실력과
              성실함을 겸비하여 촉망받는 신예 연주자다.
            </p>
          </Section>

          <Section
            id="2"
            prefix="2."
            title="생애 및 활동"
            isOpen={openSections.s2}
            onToggle={() => toggleSection("s2")}
          >
            <SubSection id="2.1" prefix="2.1." title="학문적 행보">
              <p className="mb-4">
                울산대학교 피아노과에 수석으로 입학하며 일찍이 두각을 나타냈다.
                이후 미국{" "}
                <a
                  href="https://namu.wiki/w/%EC%98%A4%EB%A6%AC%EA%B1%B4%20%EB%8C%80%ED%95%99%EA%B5%90
"
                  className="text-[#0275d8] hover:underline"
                >
                  University of Oregon(UO)
                </a>
                으로 건너가 Alexandre Dossin 교수 밑에서 박사 과정을 밟고 있다.
                사실상 교수님의 "애제자" 일 만큼 실력에 기반한 신뢰가 두텁다.
              </p>
              <p className="mb-4">
                박사과정 3년 차로 음악분야에 대한 깊은 전공 지식을 보유하고
                있다. 실제 음악도 대중음악 하나 듣지 않고 클래식만 듣는다고
                한다. 그 덕에 아무 클래식 곡이나 물어보면 검색엔진마냥 제목,
                작곡가가 바로 툭툭 튀어나오며 알고리즘 추천 엔진까지 동반하여
                추천곡들도 제공하곤 한다.{" "}
              </p>
              <p className="mb-4">
                자신이 받는 레슨 외에도 자신이 학생들을 가르치는 티칭을
                19명에게나 할 정도로 자신의 전공 분야와 관련해 굉장히 빡빡한
                일정을 소화한다. 여기에 더해 대학원 수업까지 들으니 이시대의
                헤르미온느가 따로 없다고 할 수 있다.
              </p>
              <p className="mb-4">
                최근 시카고에서 열린{" "}
                <a
                  href="https://www.mtna.org/Conference/index.html
"
                  className="text-[#0275d8] hover:underline"
                >
                  MTNA conference
                </a>
                에서 northwest division 1위를 차지하고 전국 결승 진출자에 오르는
                쾌거를 이루었다.
              </p>
              <p>
                실 연주 실력은 두말하면 잔소리이고 음악사, 음악이론, 학교 내
                반주, 교회 반주
                <FnLink num={4} />, 리사이틀, 콩쿨 등 자신의 커리어를 끊임없이
                차곡차곡 쌓아가는 중이다.
              </p>
            </SubSection>

            <SubSection id="2.2" prefix="2.2." title="교회 생활">
              <p className="mb-4">
                <a
                  href="https://eugenechurch.org/
"
                  className="text-[#0275d8] hover:underline"
                >
                  유진한인장로교회
                </a>{" "}
                찬양팀의 메인 반주자로 매주 섬기며 유진교회의 심장이라고 할 수
                있다.
              </p>
              <p className="mb-4">
                아기들 사이에서 삼촌역할을 하며 애기들 놀아주기를 맡고 있다
                <FnLink num={5} />
              </p>
              <p>
                신앙심도 투철하여 하나님과 동행하는 삶을 살아가는 중이다. 작년
                유진 교회 수련회를 갔다와서 골로새서를 묵상하고 이를 나눔해준
                적이 있다.
              </p>
            </SubSection>

            <SubSection id="2.3" prefix="2.3." title="취미 활동">
              <p className="mb-4">
                미술에 대한 깊은 조예
                <FnLink num={6} />, 꾸준한 런닝으로 다져진 체력을 모두 가지고
                있는, 예체능의 모든 분야를 섭렵한 팔방미인이다. 10키로 이상도
                5분대 페이스로 거뜬히 뛰는 대단한 런닝 실력을 보유하고 있다. 집
                주변 아마존파크를 세바퀴씩 뛰며 단련된 체력으로 심지어 20키로
                넘는 하프마라톤 코스도 혼자 뛰곤 한다. 4월에 열리는 유진
                하프마라톤에 나갈 예정이었으나 교회 찬양팀 일정과 겹쳐 이것마저
                포기하며 우선순위를 확실히 두는 면모를 보인다.{" "}
              </p>
              <p className="mb-4">
                독서를 꾸준한 취미로 삼고 있는데, 작년에는 ‘이방인’을 재밌게
                읽었다고 한다. 이외에도 참을 수 없는 존재의 가벼움, 인간 실격,
                변신, 설국 등 굵직한 작품들을 읽고 주변인에게 추천까지 해주며
                독서광의 면모를 보였다. 여름에 한국에 가면{" "}
                <del className="text-gray-400">
                  오늘이 끝인 것처럼 노는 얼라들과는 달리
                </del>{" "}
                교보문고에 꼬박꼬박 출석할 정도라고 한다.{" "}
              </p>
              <p className="mb-4">
                언어를 배우는 것에도 관심이 많아, 2025년에는 JLPT N3 를
                취득했다. 추후에는 프랑스어와 독일어도 배울 예정이라고 한다.
              </p>
              <p>
                여행을 매우 좋아한다. 미국에 5년 거주하며 샌프란시스코, 시애틀,
                시카고, 플로리다, 뉴욕, 캐나다 등 다수의 지역으로 여행을 다녀온
                바 있다. 여행 도중 비행기가 취소되는 등 상당한 억까를 겪기도
                했지만 특유의 차분한 마인드와 노련한 경험으로 능숙하게 극복하는
                모습이 돋보였다.
              </p>
            </SubSection>
          </Section>

          <Section
            id="3"
            prefix="3."
            title="수상경력"
            isOpen={openSections.s3}
            onToggle={() => toggleSection("s3")}
          >
            <AwardsTable />
          </Section>

          <Section
            id="4"
            prefix="4."
            title="특징 및 성격"
            isOpen={openSections.s4}
            onToggle={() => toggleSection("s4")}
          >
            <p className="mb-4">
              30대로 접어드는 나이에도 불구하고 어린 친구들과 함께 생활하는 것에
              능숙해 그런지 상당한 느좋남의 분위기를 풍기곤 한다. 특히 그의
              인스타그램 게시물들을 살펴보면 그의 독보적인 미적 감각과 사진
              실력을 엿볼 수 있다. 본인 셀카보단 남찍사
              <FnLink num={7} />, 풍경 사진이 많은 편이다.{" "}
            </p>
            <p className="mb-4">
              사실 mz 세대 못지 않은 트렌디함을 갖추면서도 (개인{" "}
              <a
                href="https://www.instagram.com/jyun__pf/"
                className="text-[#0275d8] hover:underline"
              >
                인스타
              </a>
              ,{" "}
              <a
                href="https://www.youtube.com/@pf_jun"
                className="text-[#0275d8] hover:underline"
              >
                유튜브
              </a>
              도 활발히 하는 중) 하도 놀려대는 어린 친구들의 아재라이팅에 스스로
              늙은이 취급을 하곤 한다.
              <FnLink num={8} />
            </p>
            <p className="mb-4">
              예중 예고 출신이 아닌 인문계 출신으로 미적분과 확통까지 다 뗐으며
              천문학, 물리학에 관심이 많아 혼자 관련 서적을 찾아 공부하기도 할
              정도로 예술계 인재 중 상당한 엘리트과라 할 수 있다. 고등학교 때는
              자칭 우주광이라고 할 정도로 별자리를 달달 다 외웠다고 한다.{" "}
              <del className="text-gray-400">이과들은 뭐 어쩌라고</del>
            </p>
            <p className="mb-4">
              재테크에도 관심이 높으며 대부분 ETF 투자 중심으로 한다. 23살
              동료에게 해주고픈 조언은 다른 게 아니라 일찍이 투자를 하라는…
              운동도 어릴 때부터 꾸준히 할 것을 강력히 권고했다.
            </p>
            <p className="mb-4">
              피아노 치는 모습이 정말 압권이다. 적당히 끼부리면서 과하게
              오버액션하지도 않는 절제미 있는 퍼포먼스를 보여준다. 교근에 힘주며
              건반을 내리칠 때 관객의 심장을 함께 내려치는 경향이 있다.
              <FnLink num={9} /> 작은 음들까지 섬세하게 터치하는 정교한 테크닉을
              보유했으며 자신이 연주하는 것과는 별개인 티칭도 이해하기 쉽게
              논리적으로 알려주는 실력자이다.
              <FnLink num={10} />
            </p>
            <p className="mb-4">
              그러나 정작 본인은 사람들 앞에 서기 싫어하고 무대를 싫어하는 극
              I의 모먼트를 보여준다. 그러면서 어떻게 리사이틀 및 공연들을 척척
              해내는지 경이로울 지경이다. 더군다나 사람들과 처음 만나는 자리
              등에서 오히려 굉장히 사교적인 성격을 보이며 굉장한 사회성 스킬이
              연륜과 함께 쌓인 것으로 보인다.
            </p>
            <p className="mb-4">
              보여지는 모습과는 다른 겸손한 성격에 유명해졌으면 좋겠지만
              유명해지지 않았으면 하는 아티스트 1위로 꼽힌다.
            </p>
            <p>
              특유의 다정하고 능숙한 성격으로 교제하는 이성도 끊이지 않았다.
              <FnLink num={11} /> 현재는 연애를 쉬고 있지만 주변에 결혼을 하기
              시작하는 친구들을 보며 복잡한 감정을 느끼는 듯 하다.
            </p>
          </Section>

          <Section
            id="5"
            prefix="5."
            title="논란 및 사건사고"
            isOpen={openSections.s5}
            onToggle={() => toggleSection("s5")}
          >
            <p className="mb-4">
              2025년 11월, ‘준이통’이라는 대대적인 질병을 퍼뜨린 바 있다. 주요
              감염원인은 11월 20일에 진행된 리사이틀 공연으로, 공연 이후 해당
              질병을 호소하는 환자들이 발생했다.
            </p>
            <p className="mb-4">
              감염 증상은 주로 두통 및 흉통으로 나타난다. 특히, 준이를 직접
              보거나 준이 없이 준이토크를 할 때, 준이 때문에 미치겠는 느낌이 확
              오면서 머리가 아프고, 가슴이 답답해진다. 이후, 이성이 흐려져 밤티
              멘트 혹은 행동을 하게 된다.
              <FnLink num={12} />
            </p>
            <p className="mb-4">
              본인 스스로 환자들의 질병 증세를 극대화하는 행동을 하기도 했다.
              대표적으로 (1) 선이 피아노 레슨 및 라이딩 (2) 상아 스토리 답장 및
              녹음/영상본 공유 등이 있다.
            </p>
            <p>
              윤준의 병크가 터지지 않는 한 후유증 및 재발 가능성은 꾸준히 존재할
              것으로 보인다.
            </p>
          </Section>

          <Section
            id="6"
            prefix="6."
            title="여담"
            isOpen={openSections.s6}
            onToggle={() => toggleSection("s6")}
          >
            <p className="mb-4">
              자신이 음악에 재능이 있다는 것을 느낀 것은 다른 것이 아니라 남들을
              가르칠 때 깨달았다고 한다. 자신은 쉽게 했던 것 같은데 ‘어 이게 왜
              안되지..?’ 라고 느껴졌다고.
              <del className="text-gray-400"> 재능에 기반한 기만이다</del>
            </p>
            <p className="mb-4">
              딱히 유명교수님께 레슨을 받지도 않고 동네 학원에서 순수 피지컬로
              정시를 뚫은 실력파이다. 수시입시때 학원 선생님과 불미스러운 사건
              <FnLink num={13} />을 겪고 정시 입시 준비 기간 3개월동안 매일
              9시간씩 연습했다고 한다. 입시곡 중 하나인 쇼팽 에튀드 10-8 햇빛은
              윤준의
              <a
                href="https://www.youtube.com/watch?v=bL9pSvecw7M
"
                className="text-[#0275d8] hover:underline"
              >
                {" "}
                유튜브
              </a>
              에도 업로드되어있는데 객관적으로 뛰어난 연주실력에 조회수가 거의
              10만을 앞두고 있을 지경이다
            </p>
            <p className="mb-4">
              제일 좋아하는 아티스트는{" "}
              <a
                href="https://namu.wiki/w/%EC%9A%94%ED%95%9C%20%EC%A0%9C%EB%B0%94%EC%8A%A4%ED%8B%B0%EC%95%88%20%EB%B0%94%ED%9D%90"
                className="text-[#0275d8] hover:underline"
              >
                바흐
              </a>
              이다.
            </p>
            <p className="mb-4">
              제일 좋아하는 가곡은 슈트라우스의 Morgen이다 자신의 인스타그램
              프로필에까지 가사를 박아놓을 정도이다.
            </p>
            <p className="mb-4">
              제일 좋아하는 찬양은 나의 하나님, 주의 자녀로 산다는 것은, 온전케
              되리 등이 있으며 김윤진 간사의 찬양인도를 특히 좋아한다.
            </p>
            <p className="mb-4">
              군대를 준비하는 동안 군악대를 지원하기 위해 3수를 했다. 이것마저
              떨어지면 그냥 육군가야지 하는 마인드로 지원했는데 심지어
              클라리넷으로 합격했다.{" "}
              <del className="text-gray-400"> 될놈될</del> 그렇게 피복실에 있는
              업라이트 피아노로 군생활 내내 피아노를 연습할 수 있었다고 한다.
              참고로 부대 내에서도 준이라는 이름이 세명이나 있어서 준트리오라고
              불리곤 했었다.
            </p>
            <p className="mb-4">
              놀이기구를 상당히 못타는 편이라고 한다. 왜 굳이 돈주고
              무서워지는지 이해를 못한다고 <FnLink num={14} />
            </p>
            <p className="mb-4">
              은근 잘 먹는다. 근데 음식의 기쁨은 많이 느끼지 않는 편. 살기 위해
              먹는편이라고 한다. 그러나 그런 것 치고 meal plan을 별도로 결제하여
              carson hall dining을 아주 애용하곤 한다. 그런데도 살이 안찌는 걸
              보면 대단한 기초대사량을 가지고 있을 것으로 예상된다.
            </p>
            <p>전화보단 문자가 편한 편이다</p>
          </Section>

          <footer className="mt-20 pt-6 pb-12 border-t-2 border-[#ccc] text-[14px] text-gray-800 leading-relaxed space-y-3">
            {footnoteData.map((fn) => (
              <FnItem key={fn.id} num={fn.id}>
                {fn.text}
              </FnItem>
            ))}
          </footer>
        </div>
      </main>
    </div>
  );
}
