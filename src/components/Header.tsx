import React from "react";
// 나무위키 아이콘과 비슷한 아이콘들을 불러옵니다.
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
    <header className="w-full bg-[#00a495] shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between text-white font-sans text-[13px]">
        {/* 왼쪽: 로고 및 메인 메뉴 */}
        <div className="flex items-center gap-5">
          {/* 로고 영역 (이미지의 로고 모양을 텍스트로 흉내낸 것입니다.) */}
          <div className="flex items-center gap-1 cursor-pointer">
            {/* 실제 로고 이미지가 있다면 <img src="/logo.png" /> 로 대체 가능 */}
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center font-bold text-xs">
              🎹
            </div>
            <span className="text-xl font-bold tracking-tight">윤준위키</span>
          </div>

          {/* 메뉴 아이템들 */}
          <div className="hidden md:flex items-center gap-5 text-gray-100">
            <MenuLink icon={FiEdit2} label="최근 변경" />
            <MenuLink icon={FiMessageSquare} label="최근 토론" />
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              <FiBriefcase className="w-4 h-4" />
              <span>특수 기능</span>
              <IoMdArrowDropdown className="w-3 h-3 text-gray-200" />
            </div>
          </div>
        </div>

        {/* 오른쪽: 검색창 및 프로필 */}
        <div className="flex items-center gap-4">
          {/* 랜덤 문서 버튼 (이미지 오른쪽의 박스) */}
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded border border-[#00a495] cursor-pointer hover:bg-gray-100 transition-colors">
            <FiShuffle className="w-4 h-4 text-[#00a495]" />
          </div>

          {/* 검색창 영역 */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="여기에서 검색"
              className="w-[200px] lg:w-[280px] h-8 bg-white text-[#373a3c] placeholder:text-gray-400 pl-3 pr-10 text-[13px] rounded focus:outline-none shadow-inner"
            />
            {/* 검색 아이콘들 */}
            <div className="absolute right-2.5 flex items-center gap-2 text-gray-400">
              <FiSearch className="w-4 h-4 cursor-pointer hover:text-wiki-green transition-colors" />
              <span className="text-lg font-light text-gray-300">|</span>
              <span className="cursor-pointer hover:text-wiki-green transition-colors text-xs">
                →
              </span>
            </div>
          </div>

          {/* 맨 오른쪽 프로필 아이콘 */}
          <div className="cursor-pointer hover:opacity-80 transition-opacity">
            <FiUser className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

// 메뉴 링크용 유틸리티 컴포넌트
function MenuLink({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </div>
  );
}

export default Header;
