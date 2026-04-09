import React from "react";
import Link from "next/link";
import {
  FiEdit2,
  FiMessageSquare,
  FiBriefcase,
  FiSearch,
  FiShuffle,
  FiUser,
} from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full bg-[#00a495] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4 h-12 flex items-center justify-between text-white font-sans text-[13px]">
        {/* 왼쪽: 로고 및 메인 메뉴 */}
        <div className="flex items-center gap-3 md:gap-5 overflow-hidden">
          {/*  윤준위키 로고 (모바일에서 절대 안 깨지게 shrink-0, whitespace-nowrap 추가) */}
          <Link
            href="/"
            className="flex items-center gap-1 hover:opacity-80 transition-opacity shrink-0"
          >
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">
              🎹
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight whitespace-nowrap">
              윤준위키
            </span>
          </Link>

          {/* 메뉴 아이템들 */}
          <div className="flex items-center gap-3 md:gap-5 text-gray-100">
            {/* 최근 변경: 데스크탑에서만 보임 */}
            <div className="hidden md:flex">
              <MenuLink icon={FiEdit2} label="최근 변경" />
            </div>

            {/*  최근 토론: 모바일에서도 항상 보임 */}
            <Link
              href="/discuss"
              className="hover:opacity-80 transition-opacity shrink-0"
            >
              <MenuLink icon={FiMessageSquare} label="최근 토론" />
            </Link>

            {/* 특수 기능: 데스크탑에서만 보임 */}
            <div className="hidden md:flex items-center gap-1 cursor-pointer hover:text-white transition-colors shrink-0">
              <FiBriefcase className="w-4 h-4" />
              <span>특수 기능</span>
              <IoMdArrowDropdown className="w-3 h-3 text-gray-200" />
            </div>
          </div>
        </div>

        {/* 오른쪽: 검색창 및 프로필 */}
        <div className="flex items-center gap-2 md:gap-4 ml-2">
          {/*  랜덤 문서 버튼(화살표): 모바일에서 숨김 (hidden md:flex 추가) */}
          <div className="hidden md:flex w-8 h-8 items-center justify-center bg-white rounded border border-[#00a495] cursor-pointer hover:bg-gray-100 transition-colors shrink-0">
            <FiShuffle className="w-4 h-4 text-[#00a495]" />
          </div>

          {/*  검색창 영역: 모바일에서 유연하게 줄어들도록 넓이 조정 */}
          <div className="relative flex items-center w-full max-w-[130px] sm:max-w-[180px] md:max-w-none">
            <input
              type="text"
              placeholder="여기에서 검색"
              className="w-full md:w-[200px] lg:w-[280px] h-8 bg-white text-[#373a3c] placeholder:text-gray-400 pl-2 md:pl-3 pr-7 md:pr-10 text-[11px] md:text-[13px] rounded focus:outline-none shadow-inner"
            />
            {/* 검색 아이콘들 */}
            <div className="absolute right-1.5 md:right-2.5 flex items-center gap-1 md:gap-2 text-gray-400">
              <FiSearch className="w-3.5 h-3.5 md:w-4 md:h-4 cursor-pointer hover:text-[#00a495] transition-colors" />
              <span className="hidden md:inline text-lg font-light text-gray-300">
                |
              </span>
              <span className="hidden md:inline cursor-pointer hover:text-[#00a495] transition-colors text-xs">
                →
              </span>
            </div>
          </div>

          {/* 맨 오른쪽 프로필 아이콘 */}
          <div className="cursor-pointer hover:opacity-80 transition-opacity shrink-0">
            <FiUser className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

// 메뉴 링크용 유틸리티 컴포넌트 (글자 안 깨지게 whitespace-nowrap 추가)
function MenuLink({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors whitespace-nowrap">
      <Icon className="w-4 h-4" />
      <span className="text-[12px] md:text-[13px]">{label}</span>
    </div>
  );
}

export default Header;
