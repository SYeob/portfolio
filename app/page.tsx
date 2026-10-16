import ProjectCarousel from "./ProjectCarousel";
import ExperienceCarousel from "./ExperienceCarousel";

const skillGroups = [
  {
    title: "테스트 전략",
    skills: "요구사항 분석 · 위험 기반 테스트 · 테스트 케이스 · 탐색적 테스트",
    proof: "QA 과정 설계, 테스트 전략 수립",
  },
  {
    title: "테스트 자동화",
    skills: "Python · Selenium · pytest · requests",
    proof: "UI/API 회귀 테스트 및 자동화 구현",
  },
  {
    title: "CI 및 결과 관리",
    skills: "GitHub Actions · pytest-html · Git · Jira · Redmine",
    proof: "CI 환경 구성, 다양한 BTS 툴 경험",
  },
  {
    title: "시스템 검증",
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
          <a href="#about">소개</a>
          <a href="#project">프로젝트</a>
          <a href="#experience">경력</a>
          <a href="#skills">기술 역량</a>
          <a href="#personal">업무 밖의 저</a>
          <a href="#contact">연락처</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">QA 엔지니어</p>
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
            <a className="button secondary" href="/portfolio/KWEON_SOONYEOB_QA_RESUME.pdf" download="KWEON_SOONYEOB_QA_RESUME.pdf">
              이력서 PDF ↓
            </a>
          </div>
        </div>
        <div className="hero-aside" aria-label="프로필 요약">
          <div className="profile-photo" role="img" aria-label="권순엽 증명사진" />
          <p>거주 지역</p>
          <span>경기도 성남시</span>
          <p>경력</p>
          <span>QA 약 5년</span>
          <p>전문 분야</p>
          <span>Technical QA</span>
        </div>
        <a className="scroll-cue" href="#about">
          아래로 살펴보기 <span>↓</span>
        </a>
      </section>

      <section className="section about" id="about">
        <div className="section-index">01 / 소개</div>
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
        <div className="section-index">04 / 기술 역량</div>
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

      <section className="section personal" id="personal" aria-labelledby="personal-title">
        <div className="section-index">05 / 업무 밖의 저</div>
        <div className="section-heading-row">
          <h2 id="personal-title">필요한 것은 만들어 보고,<br />좋아하는 것은 기록합니다.</h2>
          <p>일상에서 반복되는 일을 줄이는 방법을 찾고, 관심 있는 기술을 직접 써봅니다. 노래를 녹음하고 공유하는 시간도 즐깁니다.</p>
        </div>
        <div className="personal-grid">
          <article>
            <p className="eyebrow">01 · IT와 자동화</p>
            <h3>관심 있는 기술을 살펴보고,<br />블로그에 정리합니다.</h3>
            <p>IT 블로그를 운영하며 관심 있는 기술과 기기를 다룹니다. 조사·작성·발행 과정에는 AI와 자동화 도구를 활용하고, 원고를 검토한 뒤 발행하는 흐름을 만들었습니다.</p>
            <p>필요한 정보를 반복해서 확인하는 일도 자동화해 봅니다. LH 공고 알림처럼 생활 속 필요에서 시작한 작은 프로그램을 만듭니다.</p>
            <div className="slide-links">
              <a className="button secondary" href="https://syeob.wordpress.com/" target="_blank" rel="noreferrer">블로그 보기 ↗</a>
              <a className="button secondary" href="https://github.com/SYeob/blog-automation" target="_blank" rel="noreferrer">블로그 자동화 코드 ↗</a>
            </div>
          </article>
          <article>
            <p className="eyebrow">02 · 노래와 기록</p>
            <h3>좋아하는 노래를 부르고,<br />녹음해서 공유합니다.</h3>
            <p>노래를 부르고 녹음하는 것이 취미입니다. 부르고 싶은 곡을 골라 제 목소리로 담고, 인스타그램에 올리며 기록하고 있습니다.</p>
            <div className="slide-links">
              <a className="button secondary" href="https://www.instagram.com/conoyeob/" target="_blank" rel="noreferrer">노래 듣기 ↗</a>
            </div>
          </article>
        </div>
      </section>

      <footer className="contact" id="contact">
        <p className="eyebrow">06 / 연락처</p>
        <h2>
          더 나은 제품을 만드는 일에
          <br />
          함께하고 싶습니다.
        </h2>
        <p className="contact-email">
          <span>이메일:</span> tnsduq1324@naver.com
        </p>
        <p className="copyright">© 2026 KWEON SOONYEOB</p>
      </footer>
    </main>
  );
}
