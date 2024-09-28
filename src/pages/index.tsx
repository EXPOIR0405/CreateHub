import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 비디오 경로 배열
  const videoSources = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4',
    '/videos/video4.mp4',
  ];

  // 현재 재생 중인 비디오 인덱스 상태
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // 비디오 재생이 끝날 때 호출될 함수
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <nav className="hidden md:block flex-grow">
            <ul className="flex space-x-6 justify-end">
              <li>불법 사이트 신고하기</li>
              <li>법률 정보 지원</li>
              <li>창작자 지원 프로그램</li>
              <li className="relative">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex items-center">
                  커뮤니티 <span className="ml-1">▼</span>
                </button>
              </li>
            </ul>
          </nav>
          <div className="hidden md:flex space-x-2 ml-6">
            <button className="px-4 py-2 border">회원가입</button>
            <button className="px-4 py-2 bg-black text-white">로그인</button>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="bg-white border-t py-2">
              <li className="px-4 py-2">불법 사이트 신고하기</li>
              <li className="px-4 py-2">법률 정보 지원</li>
              <li className="px-4 py-2">창작자 지원 프로그램</li>
              <li className="px-4 py-2">커뮤니티</li>
            </ul>
          </div>
        )}
      </header>

      {isMenuOpen && (
        <div className="absolute left-0 right-0 bg-white z-10">
          <div className="container mx-auto px-4 py-6">
            <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <li>
                <h3 className="font-bold">불법 사이트 신고하기</h3>
                <p className="text-sm">불법 웹툰으로 피해를 받으셨나요? <br />여기에 신고해 주세요!</p>
              </li>
              <li>
                <h3 className="font-bold">법률 정보 지원</h3>
                <p className="text-sm">저작권 침해에 대응 방법을 안내해 드립니다.</p>
              </li>
              <li>
                <h3 className="font-bold">창작자 지원 프로그램</h3>
                <p className="text-sm">창작자들을 위한 다양한 지원 프로그램을 소개합니다.</p>
              </li>
              <li>
                <h3 className="font-bold">커뮤니티</h3>
                <p className="text-sm">작가들과 소통하고 정보를 공유할 수 있는 공간입니다.</p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 py-4 mt-6">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm">
                개발자에게 문의하고 싶으신가요? <a href="mailto:rkdalswjd0405@gmail.com" className="underline font-semibold">rkdalswjd0405@gmail.com</a>으로 문의해주세요!
              </p>
            </div>
          </div>
        </div>
      )}
           {/* 메인 콘텐츠 */}
           <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* 왼쪽 텍스트와 버튼 부분 */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-16 flex flex-col justify-center">
          <p className="text-l font-extrabold mb-4 text-blue-500">소개</p> 
          <h1 className="text-5xl font-bold mb-6">CreateHub</h1>
          <p className="text-lg mb-8">
            크리에이터 허브에 오신 것을 환영합니다! 저희는 창작자분들의 권리를 보호하고,
            보다 안전한 웹 환경을 만들기 위해 노력하고 있습니다. 불법 사이트 신고, 법률 정보 지원,
            창작자 지원 프로그램, 그리고 커뮤니티를 통해 창작자분들을 돕겠습니다. 함께해 주세요!
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded">회원가입</button>
            <button className="px-6 py-3 border border-black rounded">로그인</button>
          </div>
        </div>

        {/* 오른쪽에 이미지 배치 */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-[500px] flex items-center justify-center"> {/* 이미지 영역 */}
            <Image src="/images/placeholder-1.png" alt="Placeholder" layout="intrinsic" width={500} height={500} />
          </div>
        </div>
      </main>

         {/* 비디오 섹션 */}
      <section className="container mx-auto px-4 py-16 relative">
        {/* 비디오 영역 */}
        <div className="w-full h-[500px] bg-black relative overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop={false}
            muted
            src={videoSources[currentVideoIndex]}
            onEnded={handleVideoEnd} // 비디오가 끝날 때 호출
          />
          {/* 중앙에 문구 추가 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl font-bold">나의 소중한 작품은 내 또 다른 권리니까</p>
          </div>
        </div>
      </section>
 
{/* 주요 기능 섹션 */}
<section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mt-10 mb-20 text-center">크리에이터 허브의 주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 불법 웹툰·웹소설 신고 */}
          <div className="p-6 text-center">
            <Image src="/images/sue.png" alt="Placeholder" width={250} height={150} />
            <h3 className="text-xl font-bold mt-4">불법 웹툰·웹소설 신고</h3>
            <p className="mt-2">저작권 침해를 신고하고 보호받으세요</p>
            <Link href="/report" className="inline-block mt-4 text-blue-500">신고하기 &gt;</Link>
          </div>

          {/* 법률 정보 지원 */}
          <div className="p-6 text-center">
            <Image src="/images/lawyer.png" alt="Placeholder" width={250} height={150} />
            <h3 className="text-xl font-bold mt-4">법률 정보 지원</h3>
            <p className="mt-2">저작권 보호를 위한 법률 정보를 제공합니다.</p>
            <Link href="/legal-support" className="inline-block mt-4 text-blue-500">신고하기 &gt;</Link>
          </div>

          {/* 창작자 지원 프로그램 */}
          <div className="p-6 text-center">
            <Image src="/images/help.png" alt="Placeholder" width={250} height={150} />
            <h3 className="text-xl font-bold mt-4">창작자 지원 프로그램</h3>
            <p className="mt-2">창작자들을 위한 다양한 지원을 만나보세요.</p>
            <Link href="/creator-support" className="inline-block mt-4 text-blue-500">지원 알아보기 &gt;</Link>
          </div>

          {/* 창작자 커뮤니티 */}
          <div className="p-6 text-center">
            <Image src="/images/community.png" alt="Placeholder" width={250} height={150} />
            <h3 className="text-xl font-bold mt-4">창작자 커뮤니티</h3>
            <p className="mt-2">같은 고민을 가진 창작자들과 <br/> 소통해보세요.</p>
            <Link href="/community" className="inline-block mt-4 text-blue-500">커뮤니티 참여 &gt;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};






export default Index;