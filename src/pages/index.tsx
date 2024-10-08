import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,  
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsSection = () => {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '불법 웹툰 사이트로 인한 웹툰 피해액 (2017-2022)',
      },
    },
  };

  const data: ChartData<'bar'> = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        type: 'bar' as const,
        label: '피해액 (단위: 억 원)',
        data: [5586, 8378, 3183, 5488, 8427, 7215],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mt-10 mb-4">웹툰 불법 유통 피해 현황 알아보기</h2>
      <p className="mb-8 text-gray-700">
        &apos;공짜로 즐겨야 이득이지!&apos;라고 생각하는 당신, 알고 계신가요? 불법 웹툰 사이트로 인해 창작자들이 
        저작권 침해와 수익 감소로 고통받고 있습니다. 귀하의 사랑에 힘입어(?) 지금도 많은 작품들이 무단으로 
        유통되고 있답니다. 어쩌면 당신의 손끝에서 누군가의 노력과 꿈이 사라지고 있을지도 몰라요!
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/3">
          <Chart type='bar' options={options} data={data} />
        </div>
      </div>
      {/* 통계 하단 설명 문구 */}
      <p className="mt-10 text-center text-sm text-gray-600">
        출처 : 한국콘텐츠진흥원
        <br />
        * 2017년도와 2018년도 8월까지의 누적 피해량이 1조 172억 원임을 고려하여 2018년 4개월치 분량을 임의로 계산하여 추가하였습니다.
      </p>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4">
        {/* 상단 네비게이션 부분 */}
        <div className="flex justify-between items-center mb-8">
          {/* 로고 */}
          <div className="text-2xl font-bold">CreateHub</div>
          
          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-700 hover:text-black">크리에이터 허브 소개</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">문의하기</Link>
            <Link href="/faq" className="text-gray-700 hover:text-black">자주 묻는 질문</Link>
          </nav>
        </div>

        {/* 하단 저작권 및 링크 부분 */}
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2024 크리에이터 허브. All rights reserved.</p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-600 hover:text-black text-sm">서비스 이용 약관</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-black text-sm">개인정보 처리방침</Link>
              <Link href="/community-guidelines" className="text-gray-600 hover:text-black text-sm">커뮤니티 가이드라인</Link>
            </nav>
            <p className="text-gray-600 text-sm mt-4 md:mt-0">문의: rkdalswjd0405@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Index = () => {
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

  // 커스텀 화살표 컴포넌트
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-0 z-10 transform -translate-y-1/2 top-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  };

  const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-0 z-10 transform -translate-y-1/2 top-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  //슬라이더 정의 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  // FAQ 데이터
  const faqs = [
    {
      question: '크리에이터 허브, 뭔가요? 🤔',
      answer: '크리에이터 허브는 웹툰, 웹소설 창작자들을 지원하고 보호하기 위해 만들어진 플랫폼입니다. 불법 웹툰 사이트 신고, 법률 정보 지원, 창작자 지원 프로그램, 그리고 커뮤니티에 기능을 제공합니다.',
    },
    {
      question: '불법 웹툰 사이트, 어디서 신고하죠? 🚨',
      answer: '상단 메뉴의 "불법 사이트 신고하기" 버튼을 클릭하면 신고 페이지로 이동합니다. 필요한 정보를 입력하고 증거 자료를 첨부하여 신고할 수 있습니다.',
    },
    {
      question: '창작자 지원 프로그램은 어떻게 참여할 수 있나요?',
      answer: '크리에이터 허브의 창작자 지원 프로그램 섹션에서 프로그램 정보를 확인하고, 지원 신청을 통해 참여할 수 있습니다. 지원 자격과 방법에 대한 자세한 내용은 해당 페이지에 안내되어 있습니다.',
    },
    {
      question: '커뮤니티에 가입하려면 어떻게 해야 하나요?',
      answer: '회원가입 후 "커뮤니티" 메뉴를 통해 자유롭게 참여할 수 있습니다. 창작자들과 소통하고 정보를 공유할 수 있는 공간입니다.',
    },
    {
      question: '웹툰 불법 유통 문제를 해결하기 위해 어떤 지원을 받을 수 있나요?',
      answer: '크리에이터 허브는 저작권 침해에 대한 법률 상담, 신고 절차 안내, 커뮤니티를 통한 정보 공유 등 다양한 지원을 제공합니다. 자세한 사항은 "법률 정보 지원" 섹션을 확인하세요.',
    },
    {
      question: '회원가입은 무료인가요?',
      answer: '네, 크리에이터 허브의 회원가입은 무료입니다. 창작자 지원 및 커뮤니티 활동을 위해 가입 후 자유롭게 이용하실 수 있습니다.',
    },
  ];

  // 각 FAQ의 열림 상태를 관리하는 상태
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 각 항목의 클릭 이벤트 핸들러
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">CreateHub</div>
          <nav className="hidden md:block flex-grow">
            <ul className="flex space-x-6 justify-end">
              <Link href="/report" className="text-gray-700 hover:text-black">불법 사이트 신고하기</Link>
              <Link href="/legal" className="text-gray-700 hover:text-black">법률 정보 지원</Link>
              <Link href="/support" className="text-gray-700 hover:text-black">창작자 지원 프로그램</Link>
              <Link href="/community" className="text-gray-700 hover:text-black">커뮤니티</Link>
            </ul>
          </nav>
          <div className="hidden md:flex space-x-2 ml-6">
            <button className="px-4 py-2 border rounded hover:bg-gray-100">회원가입</button>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">로그인</button>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-md">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/report">불법 사이트 신고하기</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/legal">법률 정보 지원</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/support">창작자 지원 프로그램</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link href="/community">커뮤니티</Link></li>
            </ul>
          </div>
        )}
      </header>

      {/* 메인 소개 콘텐츠 */}
      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* 왼쪽 텍스트와 버튼 부분 */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-16 flex flex-col justify-center">
          <p className="text-l font-extrabold mb-4 text-blue-500">소개</p> 
          <h1 className="text-5xl font-bold mb-6">CreateHub</h1>
          <p className="text-lg mb-8">
          안녕하세요! 크리에이터 허브에 오신 걸 환영해요! 🥳 여기선 창작자분들의 소중한 작품을 보호하고, 안전한 웹 환경을 만드는 데 함께 노력해요. 우리 함께 힘내요! 💪
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded">회원가입</button>
            <button className="px-6 py-3 border border-black rounded">로그인</button>
          </div>
        </div>

        {/* 오른쪽에 이미지 배치 */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-[500px] flex items-center justify-center"> {/* 이미지 영역 */}
            <Image src="/images/placeholder-1.png" alt="Placeholder" width={500} height={500} />
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
            <p className="text-white text-3xl font-bold">내 작품은 내 자부심! 함께 지켜봐요! ✨</p>
          </div>
        </div>
      </section>
      {/* 주요 기능 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mt-10 mb-20 text-center">크리에이터 허브, 어떤 기능들이 있을까요? 👀</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 불법 웹툰·웹소설 신고 */}
          <div className="p-1 text-center">
            <Image
              src="/images/sue.png"
              alt="Placeholder"
              width={400}
              height={150}
              className="w-full h-auto" // 반응형 이미지 크기 조정
            />
            <h3 className="text-xl font-bold mt-4">불법 웹툰·웹소설 신고</h3>
            <p className="mt-2">저작권 침해를 신고하고 보호받으세요</p>
            <Link href="/report" className="inline-block mt-4 text-blue-500">신고하기 🚨 &gt;</Link>
          </div>

          {/* 법률 정보 지원 */}
          <div className="p-1 text-center">
            <Image
              src="/images/lawyer.png"
              alt="Placeholder"
              width={400}
              height={150}
              className="w-full h-auto" // 반응형 이미지 크기 조정
            />
            <h3 className="text-xl font-bold mt-4">법률 정보 지원</h3>
            <p className="mt-2">저작권 보호를 위한 법률 정보를 제공합니다.</p>
            <Link href="/legal" className="inline-block mt-4 text-blue-500">자세히 알아보기 &gt;</Link>
          </div>

          {/* 창작자 지원 프로그램 */}
          <div className="p-1 text-center">
            <Image
              src="/images/help.png"
              alt="Placeholder"
              width={400}
              height={150}
              className="w-full h-auto" // 반응형 이미지 크기 조정
            />
            <h3 className="text-xl font-bold mt-4">창작자 지원 프로그램</h3>
            <p className="mt-2">창작자들을 위한 다양한 지원을 만나보세요.</p>
            <Link href="/support" className="inline-block mt-4 text-blue-500">지원 알아보기 &gt;</Link>
          </div>

          {/* 창작자 커뮤니티 */}
          <div className="p-1 text-center">
            <Image
              src="/images/community.png"
              alt="Placeholder"
              width={400}
              height={150}
              className="w-full h-auto" // 반응형 이미지 크기 조정
            />
            <h3 className="text-xl font-bold mt-4">창작자 커뮤니티</h3>
            <p className="mt-2">같은 고민을 가진 창작자들과 <br /> 소통해보세요.</p>
            <Link href="/community" className="inline-block mt-4 text-blue-500">커뮤니티 참여 &gt;</Link>
          </div>
        </div>
      </section>

      <StatisticsSection />
      {/* 섹션 헤더 */}
      <section className="container mx-auto px-4 py-16 bg-slate-100 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-10">독자들이 보내는 따뜻한 응원 메시지</h2>

        <Slider {...settings}>
          {/* 응원 메세지 항목 1 */}
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">
              좋아하는 웹툰을 정식으로 즐길 수 있어 행복해요. 작가님, 항상 응원합니다!
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Image src="/images/reader.png" alt="Reader" width={50} height={50} className="rounded-full" />
              <span className="text-lg font-bold">독자 A</span>
            </div>
          </div>

          {/* 슬라이더 항목 2 */}
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">
              웹툰 작가님들 덕분에 많은 행복을 느낍니다. 정식 플랫폼을 이용해 창작자를 응원합니다!
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Image src="/images/reader2.png" alt="Reader" width={50} height={50} className="rounded-full" />
              <span className="text-lg font-bold">독자 B</span>
            </div>
          </div>

          {/* 슬라이더 항목 3 */}
          <div className="text-center">
            <p className="text-xl font-semibold mb-4">
              정식 웹툰을 이용해 작가님들의 노력을 응원합니다. 작가님, 파이팅!
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Image src="/images/reader3.png" alt="Reader" width={50} height={50} className="rounded-full" />
              <span className="text-lg font-bold">독자 C</span>
            </div>
          </div>
        </Slider>
      </section>

      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
      {/* 왼쪽 섹션 */}
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-bold mb-8">FAQ</h2>
        <p className="text-lg mb-4">
          FAQ에서 찾는 답변이 없으신가요? 언제든지 문의해 주세요!
        </p>
        <button className="px-6 py-3 border border-black rounded mb-8">문의하기</button>
      </div>
      
      {/* 오른쪽 섹션 */}
      <div className="w-full md:w-2/3 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
    {/* 푸터 섹션 */}
    <Footer />
    </div>
  );
};

export default Index;