import { useAuth } from "../auth/hooks/useAuth";
import { useSong } from "../home/hooks/useSong";
import Player from "../home/components/player";
import useFaceTracker from "./hooks/useFaceTracker";
import useMoodDetector from "./hooks/useMoodDetector";
import styles from "./expression.module.scss";

const STATUS_MESSAGES = {
  initializing: "Booting Vision Core\u2026",
  "loading-model": "Loading Neural Model\u2026",
  "requesting-camera": "Connecting Camera\u2026",
  tracking: "Live Feed Active",
  "camera-denied": "Camera Access Denied",
  error: "Vision Pipeline Error",
};

const MOOD_DESCRIPTIONS = {
  Happy: "Joyful & upbeat energy detected. Queuing energetic & inspiring tracks.",
  Sad: "Reflective & mellow sentiment detected. Queuing gentle acoustic & ambient tones.",
  Surprised: "High wonder & excitement detected. Queuing dynamic beats & high-energy rhythms.",
  Neutral: "Calm & balanced state detected. Queuing smooth chillout & lo-fi vibes.",
};

const MOOD_ICONS = {
  Happy: "☀",
  Sad: "🌧",
  Surprised: "⚡",
  Neutral: "🎵",
};

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.icon}>
      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.iconStroke}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function ScanIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.iconStroke}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.iconStroke}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" className={styles.iconStroke}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

export default function FaceExpressionTracker() {
  const { videoRef, status, expressions, isReady } = useFaceTracker();
  const { detectedMood, hasDetected, captureMood, allMoods } = useMoodDetector(expressions);
  const { user, handleLogout } = useAuth();
  const { handleGetSong } = useSong();

  const isError = status === "camera-denied" || status === "error";
  const isLoading = !isReady && !isError;

  const handleDetectMood = () => {
    const result = captureMood();
    if (result && result.mood) {
      handleGetSong({ mood: result.mood.toLowerCase() });
    }
  };

  return (
    <div className={styles.tracker}>
      {/* Top Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.brand}>
          <div className={styles.brandBadge}>
            <SparklesIcon />
          </div>
          <span className={styles.brandName}>Moodify</span>
          <span className={styles.versionTag}>AI STUDIO</span>
        </div>

        {user ? (
          <div className={styles.userProfile}>
            <div className={styles.userInfo}>
              <span className={styles.userAvatar}>
                {(user.username || user.email || "U")[0].toUpperCase()}
              </span>
              <span className={styles.userName}>{user.username || user.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className={styles.logoutBtn}
              title="Sign out of account"
            >
              <LogoutIcon />
            </button>
          </div>
        ) : (
          <div className={styles.guestBadge}>
            <UserIcon />
            <span>Guest Session</span>
          </div>
        )}
      </nav>

      {/* Main Grid Content */}
      <div className={styles.contentGrid}>
        {/* Left Column: Video Feed */}
        <div className={styles.videoCard}>
          <div className={styles.videoViewport}>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className={styles.videoFeed}
            />

            {/* Viewport UI Brackets */}
            <div className={styles.cornerTL} />
            <div className={styles.cornerTR} />
            <div className={styles.cornerBL} />
            <div className={styles.cornerBR} />

            {/* Scan Beam Overlay */}
            {isReady && <div className={styles.scanLine} />}

            {/* Live Camera Badge */}
            {isReady && (
              <div className={styles.liveBadge}>
                <span className={styles.pulseDot} />
                <span>CAMERA ACTIVE</span>
              </div>
            )}

            {isLoading && (
              <div className={styles.loadingOverlay}>
                <div className={styles.glassSpinner} />
                <span className={styles.loadingText}>
                  {STATUS_MESSAGES[status]}
                </span>
              </div>
            )}

            {isError && (
              <div className={styles.errorOverlay}>
                <div className={styles.errorIconCircle}>
                  <CameraIcon />
                </div>
                <span className={styles.errorText}>
                  {STATUS_MESSAGES[status]}
                </span>
              </div>
            )}
          </div>

          {/* Action Control Bar */}
          <div className={styles.controlsBar}>
            <button
              className={styles.actionBtn}
              onClick={handleDetectMood}
              disabled={!isReady}
            >
              <ScanIcon />
              <span>{hasDetected ? "Re-scan Expression" : "Analyze My Mood"}</span>
            </button>

            <div className={styles.statusIndicator}>
              <span className={styles.statusDot} data-active={isReady} />
              <span>{STATUS_MESSAGES[status]}</span>
            </div>
          </div>
        </div>

        {/* Sidebar Insights Block */}
        <div className={styles.insightsCard}>
          {!hasDetected ? (
            <div className={styles.readyPlaceholder}>
              <div className={styles.pulseIconBadge}>
                <SparklesIcon />
              </div>
              <h2>Awaiting Face Analysis</h2>
              <p>
                Position your face clearly in the camera frame and click <strong>Analyze My Mood</strong> to generate your soundtrack.
              </p>
            </div>
          ) : (
            <div className={styles.resultsWrapper}>
              {/* Primary Mood Result Card */}
              <div
                className={styles.moodHeroCard}
                style={{ "--mood-color": detectedMood.color }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.sectionTag}>Primary Emotion</span>
                  <span className={styles.confidencePill}>
                    {Math.round(detectedMood.confidence * 100)}% Confidence
                  </span>
                </div>

                <div className={styles.moodHeroContent}>
                  <div className={styles.emojiBadge}>
                    <span>{detectedMood.emoji || MOOD_ICONS[detectedMood.mood]}</span>
                  </div>
                  <div className={styles.moodTextGroup}>
                    <h2 className={styles.moodTitle}>{detectedMood.mood}</h2>
                    <p className={styles.moodDescription}>
                      {MOOD_DESCRIPTIONS[detectedMood.mood] ||
                        MOOD_DESCRIPTIONS.Neutral}
                    </p>
                  </div>
                </div>

                <div className={styles.confidenceTrack}>
                  <div
                    className={styles.confidenceFill}
                    style={{
                      width: `${Math.round(detectedMood.confidence * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Emotion Scores Breakdown */}
              <div className={styles.breakdownCard}>
                <h3 className={styles.breakdownTitle}>Sentiment Spectrum</h3>
                <div className={styles.breakdownList}>
                  {allMoods.map(({ mood, color }) => {
                    const score = detectedMood.scores[mood] || 0;
                    const percent = Math.round(score * 100);
                    const isDominant = detectedMood.mood === mood;

                    return (
                      <div
                        key={mood}
                        className={styles.spectrumRow}
                        data-dominant={isDominant}
                      >
                        <div className={styles.spectrumInfo}>
                          <span className={styles.moodName}>
                            {MOOD_ICONS[mood]} {mood}
                          </span>
                          <span className={styles.moodScore}>{percent}%</span>
                        </div>
                        <div className={styles.spectrumTrack}>
                          <div
                            className={styles.spectrumFill}
                            style={{
                              width: `${percent}%`,
                              background: color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Sticky Music Player */}
      <Player />
    </div>
  );
}
