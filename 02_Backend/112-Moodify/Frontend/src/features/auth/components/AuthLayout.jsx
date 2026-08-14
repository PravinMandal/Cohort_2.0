import { Link } from "react-router";

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand__icon">
      <path d="m12 2 1.55 6.45L20 10l-6.45 1.55L12 18l-1.55-6.45L4 10l6.45-1.55L12 2Z" />
      <path d="m19 16 .62 2.38L22 19l-2.38.62L19 22l-.62-2.38L16 19l2.38-.62L19 16Z" />
    </svg>
  );
}

function WaveIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="visual-wave">
      <path d="M3 12h2.5l2-7 4 14 3.5-11 2 4H21" />
    </svg>
  );
}

export default function AuthLayout({
  pageClassName,
  eyebrow,
  title,
  description,
  children,
  footer,
}) {
  return (
    <main className={`auth-page ${pageClassName}`}>
      <section className="auth-page__visual" aria-label="Moodify introduction">
        <div className="auth-page__visual-top">
          <Link to="/" className="brand" aria-label="Moodify home">
            <span className="brand__mark">
              <SparkIcon />
            </span>
            <span>Moodify</span>
          </Link>

          <span className="auth-page__privacy">
            <span className="auth-page__privacy-dot" />
            Private by design
          </span>
        </div>

        <div className="auth-page__visual-content">
          <p className="auth-page__eyebrow">
            <span className="auth-page__eyebrow-icon">
              <WaveIcon />
            </span>
            Emotion-aware listening
          </p>
          <h2>Music that meets you where you are.</h2>
          <p className="auth-page__visual-description">
            Moodify reads the moment, then turns it into a soundtrack that feels
            like yours.
          </p>

          <div className="auth-page__visual-card">
            <div className="visual-card__glow" />
            <div className="visual-card__topline">
              <span>Today&apos;s energy</span>
              <span className="visual-card__live">LIVE</span>
            </div>
            <div className="visual-card__mood">
              <span className="visual-card__emoji">☀</span>
              <div>
                <strong>Bright &amp; hopeful</strong>
                <span>Curated for your current mood</span>
              </div>
            </div>
            <div className="visual-card__bars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="auth-page__visual-bottom">
          <span>Made for the way you feel</span>
          <span>© 2026 Moodify</span>
        </div>
      </section>

      <section className="auth-page__panel">
        <div className="auth-card">
          <div className="auth-card__heading">
            <p className="auth-card__eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          {children}

          <div className="auth-card__footer">{footer}</div>
        </div>
      </section>
    </main>
  );
}
