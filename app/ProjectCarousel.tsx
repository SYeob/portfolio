"use client";

import { useRef, useState } from "react";
import CarouselNavigation from "./CarouselNavigation";

const slides = [
  { number: "01", short: "서비스와 품질 위험" },
  { number: "02", short: "테스트 전략과 설계" },
  { number: "03", short: "자동화와 검증 결과" },
];

export default function ProjectCarousel() {
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
    <section className="section project" id="project" aria-labelledby="project-title">
      <div className="project-topbar">
        <div className="section-index">02 / FEATURED PROJECT</div>
        <div className="carousel-status" aria-live="polite">
          <strong>{slides[active].number}</strong>
          <span>/ 03</span>
          <p>{slides[active].short}</p>
        </div>
      </div>

      <div
        className="project-track"
        ref={trackRef}
        onScroll={syncActiveSlide}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") moveTo(active + 1);
          if (event.key === "ArrowLeft") moveTo(active - 1);
        }}
        tabIndex={0}
        aria-label="Pa-Bi 프로젝트 상세 슬라이드"
      >
        <article className="project-slide project-overview" aria-label="1. 서비스와 품질 위험">
          <div className="slide-heading">
            <p className="eyebrow">01 · PROJECT CONTEXT</p>
            <h2 id="project-title">
              중고 경매 서비스와
              <br />
              먼저 확인한 품질 위험
            </h2>
            <p>
              Pa-Bi는 중고 물품을 등록하고 입찰/낙찰을 진행하는 중고 경매 서비스입니다. 경매 종료, 낙찰 결과, 판매자 연락처처럼 오류 영향이 큰 흐름을 서비스
              단위로 검증하기 위해 직접 구현했습니다. 요구사항 분석과 위험 식별부터 UI·API 자동화, CI 회귀까지 QA 전 과정을 설계하고 적용했습니다.
            </p>
            <div className="slide-links">
              <a className="project-link primary" href="https://syeob.lovable.app/" target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
              <a
                className="project-link"
                href="https://github.com/SYeob/secondhand-auction/blob/main/docs/01_PROJECT_OVERVIEW.md"
                target="_blank"
                rel="noreferrer"
              >
                프로젝트 개요 ↗
              </a>
            </div>
          </div>

          <div className="service-visual">
            <div className="video-frame service-video-frame">
              <span className="video-badge">LIVE SERVICE · 00:27</span>
              <video
                className="demo-video"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                poster="/portfolio/pabi-service-poster.webp"
                aria-label="Pa-Bi Auction 서비스 기능 시연 영상"
              >
                <source src="/portfolio/pabi-service-demo.mp4" type="video/mp4" />
                브라우저가 MP4 영상을 지원하지 않습니다.
              </video>
            </div>
            <div className="compact-flow" aria-label="Pa-Bi Auction 주요 기능 흐름">
              <span>
                <b>01</b>로그인
              </span>
              <span>
                <b>02</b>경매 등록
              </span>
              <span>
                <b>03</b>입찰·종료
              </span>
              <span>
                <b>04</b>낙찰 확인
              </span>
            </div>
          </div>

          <div className="risk-row">
            <article>
              <span>RISK 01</span>
              <strong>입찰 결과 정확성</strong>
              <p>최고 입찰자와 최종 금액이 정확해야 합니다.</p>
            </article>
            <article>
              <span>RISK 02</span>
              <strong>낙찰 상태 전달</strong>
              <p>종료 상태와 판매자 연락처가 올바르게 제공되어야 합니다.</p>
            </article>
            <article>
              <span>RISK 03</span>
              <strong>개인정보 노출</strong>
              <p>비낙찰자와 비로그인 사용자의 접근을 차단해야 합니다.</p>
            </article>
          </div>
        </article>

        <article className="project-slide project-design" aria-label="2. 테스트 전략과 설계">
          <div className="slide-heading compact">
            <p className="eyebrow">02 · TEST DESIGN</p>
            <h2>
              위험을 기준으로
              <br />
              검증 범위를 정했습니다.
            </h2>
            <p>
              모든 기능을 같은 깊이로 검사하지 않고 사용자 피해와 발생 가능성을 기준으로 우선순위를 정했습니다. 반복성과 계층별 검증 필요성을 고려해 UI·API·수동
              테스트를 구분했습니다.
            </p>
          </div>

          <div className="design-table" role="table" aria-label="대표 위험과 검증 방법">
            <div className="design-row header" role="row">
              <span>위험</span>
              <span>대표 검증</span>
              <span>방법</span>
            </div>
            <div className="design-row" role="row">
              <strong>낙찰 결과 오류</strong>
              <p>최고 입찰자와 최종 낙찰 금액 검증</p>
              <span>API + UI</span>
            </div>
            <div className="design-row" role="row">
              <strong>연락처 노출</strong>
              <p>비로그인·비낙찰자의 컬럼 접근 차단</p>
              <span>API + 수동</span>
            </div>
            <div className="design-row" role="row">
              <strong>종료 처리 오류</strong>
              <p>서버 시간 차이를 고려한 경매 종료 검증</p>
              <span>API</span>
            </div>
          </div>

          <div className="selection-grid">
            <article>
              <span>AUTOMATE</span>
              <h3>반복 가능하고 결과가 명확한 흐름</h3>
              <p>회귀 빈도가 높고 UI 또는 API 응답으로 결과를 판정할 수 있는 기능을 자동화했습니다.</p>
            </article>
            <article>
              <span>MANUAL</span>
              <h3>판단과 보안 관점이 필요한 검증</h3>
              <p>정책 판단, 탐색적 테스트와 민감정보 확인처럼 사람의 해석이 필요한 영역은 수동으로 남겼습니다.</p>
            </article>
          </div>

          <div className="slide-links design-links">
            <a
              className="project-link primary"
              href="https://github.com/SYeob/secondhand-auction/blob/main/docs/03_TEST_SCENARIOS.md"
              target="_blank"
              rel="noreferrer"
            >
              테스트 시나리오 ↗
            </a>
            <a className="project-link" href="https://github.com/SYeob/secondhand-auction/blob/main/docs/04_TEST_CASES.md" target="_blank" rel="noreferrer">
              테스트 케이스 ↗
            </a>
            <a
              className="project-link"
              href="https://github.com/SYeob/secondhand-auction/blob/main/docs/02_REQUIREMENTS_AND_RISKS.md#1-위험-평가-기준"
              target="_blank"
              rel="noreferrer"
            >
              위험 분석 ↗
            </a>
          </div>
        </article>

        <article className="project-slide project-automation" aria-label="3. 자동화와 검증 결과">
          <div className="automation-copy">
            <div className="slide-heading compact">
              <p className="eyebrow">03 · AUTOMATION & RESULT</p>
              <h2>
                설계한 검증을
                <br />
                회귀 테스트로 연결했습니다.
              </h2>
              <p>
                Selenium과 requests로 UI·API 테스트를 구성하고 GitHub Actions에서 전체 회귀 테스트를 실행합니다. 실패 시 화면과 보고서를 남기고, 미해결 결함은
                strict xfail로 추적합니다.
              </p>
            </div>

            <div className="automation-facts">
              <div>
                <span>UI 자동화</span>
                <strong>13개</strong>
              </div>
              <div>
                <span>API 자동화</span>
                <strong>11개</strong>
              </div>
              <div>
                <span>최종 회귀</span>
                <strong>23 PASS · 1 XFAIL</strong>
              </div>
              <div>
                <span>결함 관리</span>
                <strong>DEF-001 · 002</strong>
              </div>
            </div>

            <div className="slide-links">
              <a className="project-link primary" href="https://github.com/SYeob/secondhand-auction" target="_blank" rel="noreferrer">
                GitHub 저장소 ↗
              </a>
            </div>
          </div>

          <div className="video-frame">
            <span className="video-badge">LIVE REGRESSION · 00:12</span>
            <video
              className="demo-video"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/portfolio/pabi-regression-poster.webp"
              aria-label="Pa-Bi Auction 회귀 테스트 실행 및 HTML 보고서 영상"
            >
              <source src="/portfolio/pabi-regression-demo.mp4" type="video/mp4" />
              브라우저가 MP4 영상을 지원하지 않습니다.
            </video>
          </div>

          <p className="automation-stack">Python · Selenium · pytest · requests · pytest-html · Supabase · GitHub Actions</p>
        </article>
      </div>

      <CarouselNavigation
        active={active}
        slides={slides}
        onMove={moveTo}
        variant="dark"
        nextKicker="NEXT STORY"
        finalKicker="NEXT SECTION"
        finalLabel="03 EXPERIENCE"
        finalHref="#experience"
      />
    </section>
  );
}
