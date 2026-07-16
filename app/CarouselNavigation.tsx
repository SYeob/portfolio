"use client";

type Slide = {
  number: string;
  short: string;
};

type CarouselNavigationProps = {
  active: number;
  slides: Slide[];
  onMove: (index: number) => void;
  variant: "dark" | "light";
  nextKicker: string;
  finalKicker: string;
  finalLabel: string;
  finalHref: string;
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6 16h19M18 9l7 7-7 7" />
    </svg>
  );
}

export default function CarouselNavigation({
  active,
  slides,
  onMove,
  variant,
  nextKicker,
  finalKicker,
  finalLabel,
  finalHref,
}: CarouselNavigationProps) {
  const next = slides[active + 1];

  return (
    <>
      {active > 0 && (
        <button
          type="button"
          className={`story-peek previous ${variant}`}
          onClick={() => onMove(active - 1)}
          aria-label={`이전 슬라이드: ${slides[active - 1].short}`}
        >
          <span>PREV · {slides[active - 1].number}</span>
        </button>
      )}

      {next ? (
        <button
          type="button"
          className={`story-peek next ${variant}`}
          onClick={() => onMove(active + 1)}
          aria-label={`다음 슬라이드: ${next.short}`}
        >
          <span>NEXT · {next.number}</span>
        </button>
      ) : (
        <a
          className={`story-peek next ${variant}`}
          href={finalHref}
          aria-label={`다음 섹션: ${finalLabel}`}
        >
          <span>NEXT · SECTION</span>
        </a>
      )}

      <div className={`story-navigation ${variant}`}>
        <div className="story-progress">
          <div className="story-progress-topline">
            <strong>{slides[active].number}</strong>
            <button
              type="button"
              className="story-previous"
              onClick={() => onMove(active - 1)}
              disabled={active === 0}
            >
              이전
            </button>
          </div>
          <div className="story-progress-bars" aria-label="슬라이드 선택">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.number}
                className={index === active ? "active" : ""}
                onClick={() => onMove(index)}
                aria-label={`${slide.number} ${slide.short}`}
                aria-current={index === active ? "step" : undefined}
              />
            ))}
          </div>
        </div>

        {next ? (
          <button
            type="button"
            className="story-next-panel"
            onClick={() => onMove(active + 1)}
          >
            <span>
              <small>{nextKicker}</small>
              <strong>{next.number} {next.short}</strong>
            </span>
            <i className="story-arrow"><ArrowIcon /></i>
          </button>
        ) : (
          <a className="story-next-panel" href={finalHref}>
            <span>
              <small>{finalKicker}</small>
              <strong>{finalLabel}</strong>
            </span>
            <i className="story-arrow"><ArrowIcon /></i>
          </a>
        )}
      </div>
    </>
  );
}
