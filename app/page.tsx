import ProjectCarousel from "./ProjectCarousel";
import ExperienceCarousel from "./ExperienceCarousel";

const skillGroups = [
  {
    title: "Test Strategy",
    skills: "요구사항 분석 · 위험 기반 테스트 · 테스트 케이스 · 탐색적 테스트",
    proof: "QA 과정 설계, 테스트 전략 수립",
  },
  {
    title: "Automation",
    skills: "Python · Selenium · pytest · requests",
    proof: "UI/API 회귀 테스트 및 자동화 구현",
  },
  {
    title: "CI & Reporting",
    skills: "GitHub Actions · pytest-html · Git · Jira · Redmine",
    proof: "CI 환경 구성, 다양한 BTS 툴 경험",
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
          <p className="hero-note">제품과 사용자의 관점에서 문제를 정의하고, 검증 가능한 근거로 품질을 개선합니다.</p>
          <div className="hero-actions">
            <a className="button primary" href="#project">
              포트폴리오 살펴보기
            </a>
            <a className="button secondary" href="https://github.com/SYeob" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="hero-aside" aria-label="프로필 요약">
          <div className="profile-photo" role="img" aria-label="권순엽 증명사진" />
          <p>LOCATION</p>
          <span>경기도 성남시</span>
          <p>EXPERIENCE</p>
          <span>QA 약 5년</span>
          <p>FOCUS</p>
          <span>Technical QA</span>
        </div>
        <a className="scroll-cue" href="#about">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </section>

      <section className="section about" id="about">
        <div className="section-index">01 / ABOUT</div>
        <div className="about-lead">
          <h2>
            결함을 보고하는 데 그치지 않고,
            <br />
            발생 원인까지 분석하는 QA
          </h2>
          <div className="about-principles" aria-label="QA 접근 방식">
            <span>
              <b>01</b>요구사항 해석
            </span>
            <span>
              <b>02</b>위험 식별
            </span>
            <span>
              <b>03</b>원인 분석
            </span>
          </div>
        </div>
        <div className="about-body">
          <p>
            웹 UI와 시스템 환경에서 테스트 설계, 결함 분석, 성능 측정, 자동화 스크립트 개발을 경험했습니다. 재현 결과만 전달하지 않고 로그와 데이터, 동작 조건을
            함께 분석해 해결 가능한 정보로 만드는 것을 중요하게 생각합니다.
          </p>
          <dl>
            <div>
              <dt>경력</dt>
              <dd>QA 엔지니어 약 5년</dd>
            </div>
            <div>
              <dt>강점</dt>
              <dd>원인 추적 · 자동화 · 시스템 분석</dd>
            </div>
            <div>
              <dt>관심 영역</dt>
              <dd>Web · API · Log Analysis · Platform QA</dd>
            </div>
          </dl>
        </div>
      </section>

      <ProjectCarousel />

      <ExperienceCarousel />

      <section className="section skills" id="skills">
        <div className="section-index">04 / SKILLS</div>
        <h2>
          테스트부터 분석,
          <br />
          자동화까지 함께 사용합니다.
        </h2>
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
        <h2>
          더 나은 제품을 만드는 일에
          <br />
          함께하고 싶습니다.
        </h2>
        <p className="contact-email">
          <span>Email:</span> tnsduq1324@naver.com
        </p>
        <p className="copyright">© 2026 KWEON SOONYEOB</p>
      </footer>
    </main>
  );
}
