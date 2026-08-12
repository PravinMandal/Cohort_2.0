import useFaceTracker from "./hooks/useFaceTracker";
import useMoodDetector from "./hooks/useMoodDetector";
import styles from "./expression.module.scss";

const STATUS_MESSAGES = {
  initializing: "Starting up\u2026",
  "loading-model": "Loading face detection model\u2026",
  "requesting-camera": "Requesting camera access\u2026",
  tracking: "Camera active",
  "camera-denied": "Camera permission denied",
  error: "Something went wrong",
};

export default function FaceExpressionTracker() {
  const { videoRef, status, expressions, isReady } = useFaceTracker();
  const { detectedMood, hasDetected, captureMood, allMoods } = useMoodDetector(expressions);

  const isError = status === "camera-denied" || status === "error";
  const isLoading = !isReady && !isError;

  return (
    <div className={styles.tracker}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>Moodify</h1>
        <p className={styles.subtitle}>
          Discover music matched to your facial mood
        </p>
      </header>

      {/* Main content */}
      <div className={styles.content}>
        {/* Video & Controls */}
        <div className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className={styles.video}
            />

            {isLoading && (
              <div className={styles.loadingOverlay}>
                <div className={styles.spinner} />
                <span className={styles.loadingText}>
                  {STATUS_MESSAGES[status]}
                </span>
              </div>
            )}

            {isError && (
              <div className={styles.errorOverlay}>
                <span className={styles.errorIcon}>{"\u{1F4F7}"}</span>
                <span className={styles.errorText}>
                  {STATUS_MESSAGES[status]}
                </span>
              </div>
            )}
          </div>

          <div className={styles.controls}>
            <button
              className={styles.detectBtn}
              onClick={captureMood}
              disabled={!isReady}
            >
              {"\u{1F3AD}"} Detect Mood
            </button>

            {isReady && (
              <div className={styles.statusBadge}>
                <span className={styles.statusDot} />
                {STATUS_MESSAGES[status]}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Results */}
        <div className={styles.sidebar}>
          {!hasDetected ? (
            <div className={styles.placeholderCard}>
              <span className={styles.placeholderIcon}>{"\u{1F3AD}"}</span>
              <p className={styles.placeholderText}>
                Click <strong>Detect Mood</strong> to capture your current expression.
              </p>
            </div>
          ) : (
            <>
              {/* Mood Card */}
              <div
                className={styles.moodCard}
                style={{ borderColor: detectedMood.color }}
              >
                <p className={styles.moodEmoji}>{detectedMood.emoji}</p>
                <h2 className={styles.moodLabel}>{detectedMood.mood}</h2>

                <div className={styles.confidenceBar}>
                  <div
                    className={styles.confidenceFill}
                    style={{
                      width: `${Math.round(detectedMood.confidence * 100)}%`,
                      background: detectedMood.color,
                    }}
                  />
                </div>
                <p className={styles.confidenceText}>
                  {Math.round(detectedMood.confidence * 100)}% confidence
                </p>
              </div>

              {/* Scores Panel */}
              <div className={styles.scoresPanel}>
                <h3 className={styles.scoresPanelTitle}>Detected Scores</h3>
                {allMoods.map(({ mood, color }) => {
                  const score = detectedMood.scores[mood] || 0;
                  return (
                    <div key={mood} className={styles.scoreRow}>
                      <span className={styles.scoreMoodName}>{mood}</span>
                      <div className={styles.scoreBarTrack}>
                        <div
                          className={styles.scoreBarFill}
                          style={{
                            width: `${Math.round(score * 100)}%`,
                            background: color,
                          }}
                        />
                      </div>
                      <span className={styles.scoreValue}>
                        {(score * 100).toFixed(0)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
