"use client";

import { useRef, useState } from "react";
import CarouselNavigation from "./CarouselNavigation";

const slides = [
  { number: "01", short: "경력 개요" },
  { number: "02", short: "맥데이타" },
  { number: "03", short: "큐아이엠" },
];

const achievements = [
  {
    number: "01",
    title: "테스트 커버리지 확대",
    result: "약 4,000건",
    text: "사양과 위험을 기준으로 테스트 케이스를 기존 1,500건에서 약 4,000건까지 확장해 검증 범위와 추적성을 높였습니다.",
  },
  {
    number: "02",
    title: "인증 품질 개선",
    result: "결함 60% 감소",
    text: "GS인증 수정 요청을 분석해 재발 가능성이 높은 영역을 선제 점검하고, 2차 보고서의 결함을 줄였습니다.",
  },
  {
    number: "03",
    title: "테스트 자동화 환경 구축",
    result: "반복 검증 자동화",
    text: "Python과 Selenium으로 로그인, 실시간 경고, 검색, 결과 캡처 등 반복 UI 시나리오를 모듈화했습니다.",
  },
  {
    number: "04",
    title: "고객 이슈 원인 분석",
    result: "해결 시간 50% 단축",
    text: "현상을 전달하는 데 그치지 않고 로그와 바이너리 스펙을 분석해 개발·기술 부서가 원인을 빠르게 좁힐 수 있도록 지원했습니다.",
  },
  {
    number: "05",
    title: "운영 업무 자동화",
    result: "데이터 80% 절감",
    text: "필요한 컬럼만 추출하는 Shell Script를 개발해 122개 컬럼을 21개로 줄이고 반복 업무를 개선했습니다.",
  },
  {
    number: "06",
    title: "제품 성능 검증",
    result: "3종 라인 측정",
    text: "JMeter와 시스템 지표를 활용해 제품 라인별 성능을 측정하고, 부하 조건에서 발생하는 병목과 안정성을 검증했습니다.",
  },
];

export default function ExperienceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const moveTo = (index: number) => {
    const next = Math.max(0, Math.min(index, slides.length - 1));
    const track = trackRef.current;
    if (!track) return;

    track.scrollTo({ left: track.clientWidth * next, behavior: "smooth" });
    setActive(next);
  };

  const syncActiveSlide = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="experience-topbar">
        <div className="section-index">03 / EXPERIENCE</div>
        <div className="experience-status" aria-live="polite">
          <strong>{slides[active].number}</strong>
          <span>/ 03</span>
          <p>{slides[active].short}</p>
        </div>
      </div>

      <div
        className="experience-track"
        ref={trackRef}
        onScroll={syncActiveSlide}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") moveTo(active + 1);
          if (event.key === "ArrowLeft") moveTo(active - 1);
        }}
        tabIndex={0}
        aria-label="회사별 경력 슬라이드"
      >
        <article className="experience-slide experience-overview" aria-label="1. 경력 개요">
          <div className="section-heading-row">
            <h2 id="experience-title">문제를 찾고, 분석하고,<br />개선해 왔습니다.</h2>
            <p>2개 회사 · QA 약 5년<br />Web · System · Automotive<br />설계 · 분석 · 자동화 · 품질 개선</p>
          </div>
          <div className="experience-list">
            {achievements.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <strong>{item.result}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="experience-slide career-slide" aria-label="2. 맥데이타 경력">
          <div className="career-summary">
            <p className="eyebrow">02 · COMPANY EXPERIENCE</p>
            <h2>맥데이타</h2>
            <p className="career-period">2023.02 — 2026.07</p>
            <dl className="career-meta">
              <div><dt>제품</dt><dd>실시간 패킷 모니터링 솔루션</dd></div>
              <div><dt>환경</dt><dd>Solution · Web UI</dd></div>
              <div><dt>역할</dt><dd>테스트 설계 · 인증 · 자동화 · 배포</dd></div>
            </dl>
          </div>

          <div className="career-work-card">
            <p className="eyebrow">주요 업무</p>
            <div><span>01</span><h3>품질 인증과 사전 분석</h3><p>과거 사례와 시나리오를 분석해 잠재 결함을 식별하고 GS인증 1급 취득을 지원했습니다.</p></div>
            <div><span>02</span><h3>테스트 커버리지 확대</h3><p>요구사항과 위험을 기준으로 테스트 케이스를 1,500건에서 약 4,000건까지 확장했습니다.</p></div>
            <div><span>03</span><h3>자동화와 운영 개선</h3><p>Python·Selenium UI 자동화와 Shell Script를 개발하고 결함·패키징·버전 배포를 관리했습니다.</p></div>
          </div>

          <div className="career-impact">
            <p className="eyebrow">성과</p>
            <div className="impact-grid">
              <article><strong>60% 감소</strong><span>GS인증 결함 50건에서 19건</span></article>
              <article><strong>약 4,000건</strong><span>테스트 케이스 확장</span></article>
              <article><strong>80% 절감</strong><span>데이터 추출 용량</span></article>
              <article><strong>50% 단축</strong><span>고객 대응 작업 시간</span></article>
            </div>
          </div>

          <p className="career-tools"><span>TOOLS</span> Linux · Shell Script · Python · Selenium · Redmine</p>
        </article>

        <article className="experience-slide career-slide" aria-label="3. 큐아이엠 경력">
          <div className="career-summary">
            <p className="eyebrow">03 · COMPANY EXPERIENCE</p>
            <h2>큐아이엠</h2>
            <p className="career-period">2020.07 — 2021.09</p>
            <dl className="career-meta">
              <div><dt>제품</dt><dd>자동차 인포테인먼트 시스템</dd></div>
              <div><dt>환경</dt><dd>AVN · ccNC · 내비게이션</dd></div>
              <div><dt>역할</dt><dd>사양 · 실차 · 연동 · 로그 분석</dd></div>
            </dl>
          </div>

          <div className="career-work-card">
            <p className="eyebrow">주요 업무</p>
            <div><span>01</span><h3>사양 기반 기능 검증</h3><p>요구사항의 불일치·모순·누락을 식별하고 국내·해외 모델 Feature와 체크리스트를 검증했습니다.</p></div>
            <div><span>02</span><h3>차량·ECU 연동 검증</h3><p>Vector CANoe 시뮬레이션과 실차 환경에서 공조·SVM 등 H/W-S/W 연동을 검증했습니다.</p></div>
            <div><span>03</span><h3>호환성과 텔레매틱스</h3><p>USB·Bluetooth·Phone Projection과 Bluelink·KIA Connect의 차량-서버 통신 품질을 확인했습니다.</p></div>
          </div>

          <div className="career-impact">
            <p className="eyebrow">검증 범위</p>
            <div className="impact-grid qualitative">
              <article><strong>국내·해외</strong><span>출시 모델 기능 안정성</span></article>
              <article><strong>USB·Bluetooth</strong><span>미디어 상호 운용성</span></article>
              <article><strong>CAN·ECU</strong><span>차량 제어기 연동</span></article>
              <article><strong>텔레매틱스</strong><span>차량-서버 연결 안정성</span></article>
            </div>
          </div>

          <p className="career-tools"><span>TOOLS</span> Vector CANoe · JIRA · Confluence · MS Office</p>
        </article>
      </div>

      <CarouselNavigation
        active={active}
        slides={slides}
        onMove={moveTo}
        variant="light"
        nextKicker="NEXT CAREER"
        finalKicker="NEXT SECTION"
        finalLabel="04 SKILLS"
        finalHref="#skills"
      />
    </section>
  );
}
