import ProjectCarousel from "./ProjectCarousel";

const experiences = [
  {
    number: "01",
    title: "결함 관리 체계화",
    result: "약 1,100건",
    text: "이슈 등록부터 원인 추적, 회귀 확인까지 QA 중심의 흐름을 만들고 유관 결함을 연결해 제품 안정화를 지원했습니다.",
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

const skillGroups = [
  {
    title: "Test Strategy",
    skills: "요구사항 분석 · 위험 기반 테스트 · 테스트 케이스 · 탐색적 테스트",
    proof: "Pa-Bi QA 문서 6종과 P0 핵심 흐름 설계",
  },
  {
    title: "Automation",
    skills: "Python · Selenium · pytest · requests",
    proof: "UI/API 회귀 테스트와 Page Object 구조 구현",
  },
  {
    title: "CI & Reporting",
    skills: "GitHub Actions · pytest-html · Git",
    proof: "자동 회귀 실행, 한국어 보고서, 실패 스크린샷",
  },
  {
    title: "System QA",
    skills: "Linux · Shell Script · JMeter · Wireshark",
    proof: "제품 성능 측정, 패킷 분석, 배포·운영 자동화",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="처음으로">
          KWEON SOONYEOB
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">ABOUT</a>
          <a href="#project">PROJECT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">QA ENGINEER</p>
          <h1>
            재현에서 멈추지 않고
            <br />
            원인과 위험을 추적하는
            <br />
            <span>QA 엔지니어 권순엽입니다.</span>
          </h1>
          <p className="hero-note">
            제품과 사용자의 관점에서 문제를 정의하고, 검증 가능한 근거로
            품질을 개선합니다.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#project">포트폴리오 살펴보기</a>
            <a className="button secondary" href="https://github.com/SYeob" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="hero-aside" aria-label="프로필 요약">
          <div className="profile-photo" role="img" aria-label="권순엽 증명사진" />
          <p>LOCATION</p><span>경기도 성남시</span>
          <p>EXPERIENCE</p><span>QA 약 5년</span>
          <p>FOCUS</p><span>Technical QA</span>
        </div>
        <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
      </section>

      <section className="section about" id="about">
        <div className="section-index">01 / ABOUT</div>
        <div className="about-lead">
          <h2>결함을 보고하는 데 그치지 않고,<br />발생 원인까지 분석하는 QA</h2>
        </div>
        <div className="about-body">
          <p>
            웹 UI와 시스템 환경에서 테스트 설계, 결함 분석, 성능 측정,
            자동화 스크립트 개발을 경험했습니다. 재현 결과만 전달하지 않고
            로그와 데이터, 동작 조건을 함께 분석해 해결 가능한 정보로 만드는
            것을 중요하게 생각합니다.
          </p>
          <dl>
            <div><dt>경력</dt><dd>QA 엔지니어 약 5년</dd></div>
            <div><dt>강점</dt><dd>원인 추적 · 자동화 · 시스템 분석</dd></div>
            <div><dt>관심 영역</dt><dd>Web · API · Log Analysis · Platform QA</dd></div>
          </dl>
        </div>
      </section>

      <ProjectCarousel />

      <section className="section experience" id="experience">
        <div className="section-index">03 / EXPERIENCE</div>
        <div className="section-heading-row">
          <h2>문제를 찾고, 분석하고,<br />개선해 왔습니다.</h2>
          <p>맥데이타 · 2023.02 — 2026.07<br />큐아이엠 · 2020.07 — 2021.09<br />Web / System / Infotainment QA</p>
        </div>
        <div className="experience-list">
          {experiences.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <strong>{item.result}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-index">04 / SKILLS</div>
        <h2>테스트부터 분석,<br />자동화까지 함께 사용합니다.</h2>
        <div className="skill-list">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.skills}</p>
              <small>{group.proof}</small>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact" id="contact">
        <p className="eyebrow">CONTACT</p>
        <h2>더 나은 제품을 만드는 일에<br />함께하고 싶습니다.</h2>
        <p className="contact-email"><span>Email:</span> tnsduq1324@naver.com</p>
        <p className="copyright">© 2026 KWEON SOONYEOB</p>
      </footer>
    </main>
  );
}
