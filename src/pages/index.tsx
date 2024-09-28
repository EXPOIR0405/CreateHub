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
        불법 웹툰 사이트로 인해 많은 창작자들이 저작권 침해와 수익 감소의 피해를 입고 있습니다. 
        지금도 많은 작품들이 무단으로 유통되고 있으며, 창작자들의 권리가 보호받지 못하고 있습니다.
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

  // 그 다음 슬라이더 설정을 정의합니다
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
            <p className="text-white text-3xl font-bold">나의 소중한 작품은 내 또 다른 권리니까</p>
          </div>
        </div>
      </section>
      {/* 주요 기능 섹션 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mt-10 mb-20 text-center">크리에이터 허브의 주요 기능</h2>
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
            <Link href="/report" className="inline-block mt-4 text-blue-500">신고하기 &gt;</Link>
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
    </div>
  );
};

export default Index;