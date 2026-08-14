import { useState, useRef, useEffect } from "react";
import { useSong } from "../hooks/useSong";
import styles from "./player.module.scss";

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

const MOOD_EMOJIS = {
  happy: "☀",
  sad: "🌧",
  surprised: "⚡",
  neutral: "🎵",
};

export default function Player() {
  const { song, loading } = useSong();
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  // Auto-play when a new song object arrives
  useEffect(() => {
    if (song?.url && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Audio autoplay blocked by browser:", err);
          setIsPlaying(false);
        });
    }
  }, [song]);

  // Play / Pause Toggle
  const togglePlayPause = () => {
    if (!audioRef.current || !song?.url) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.error);
    }
  };

  // Time & Duration updates
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Volume & Mute updates
  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      setIsMuted(newVol === 0);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.8;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
    }
  };

  const handleSongEnded = () => {
    if (!isLooping) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  // Render Skeleton when loading
  if (loading) {
    return (
      <div className={styles.playerContainer}>
        <div className={styles.loadingSkeleton}>
          <div className={styles.skeletonLeft}>
            <div className={styles.skeletonCover} />
            <div className={styles.skeletonText}>
              <div className={styles.line1} />
              <div className={styles.line2} />
            </div>
          </div>
          <span className={styles.skeletonRight}>Fetching song for your mood...</span>
        </div>
      </div>
    );
  }

  // Render Empty State when no song is selected yet
  if (!song) {
    return (
      <div className={styles.playerContainer}>
        <div className={styles.emptyState}>
          <div className={styles.emptyInfo}>
            <div className={styles.musicNoteBadge}>
              <svg viewBox="0 0 24 24" className={styles.iconStroke}>
                <path d="M9 18V5l12-2v13M9 9l12-2" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <div>
              <h4 className={styles.emptyTitle}>Music Player Ready</h4>
              <p className={styles.emptySubtitle}>Detect your mood above to automatically play matching music.</p>
            </div>
          </div>
          <span className={styles.hintTag}>Waiting for emotion detection</span>
        </div>
      </div>
    );
  }

  const moodKey = (song.mood || "").toLowerCase();
  const moodEmoji = MOOD_EMOJIS[moodKey] || MOOD_EMOJIS.neutral;
  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={styles.playerContainer}>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={song.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnded}
      />

      <div className={styles.playerCard}>
        <div className={styles.ambientGlow} />

        <div className={styles.playerMain}>
          {/* Left Column: Track Info & Artwork */}
          <div className={styles.trackInfo}>
            <div className={`${styles.artworkWrapper} ${isPlaying ? styles.isPlaying : ""}`}>
              {song.posterUrl ? (
                <img
                  src={song.posterUrl}
                  alt={song.title || "Song Cover"}
                  className={styles.artwork}
                />
              ) : (
                <div className={styles.fallbackArtwork}>
                  <svg viewBox="0 0 24 24" className={styles.iconStroke}>
                    <path d="M9 18V5l12-2v13M9 9l12-2" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
              )}
            </div>

            <div className={styles.trackDetails}>
              <h3 className={styles.trackTitle}>{song.title || "Unknown Song"}</h3>
              <span className={styles.moodBadge}>
                {moodEmoji} {(song.mood || "Mood").toUpperCase()}
              </span>
            </div>
          </div>

          {/* Middle Column: Play Controls & Progress Bar */}
          <div className={styles.centerControls}>
            <div className={styles.buttonsRow}>
              {/* Loop Button */}
              <button
                className={`${styles.iconBtn} ${isLooping ? styles.active : ""}`}
                onClick={toggleLoop}
                title={isLooping ? "Loop On" : "Loop Off"}
              >
                <svg viewBox="0 0 24 24" className={styles.iconStroke}>
                  <path d="M17 2l4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3" />
                </svg>
              </button>

              {/* Main Play / Pause Button */}
              <button
                className={styles.playPauseBtn}
                onClick={togglePlayPause}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" className={styles.icon}>
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className={styles.icon}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Scrubbable Progress Bar */}
            <div className={styles.progressRow}>
              <span className={styles.timeText}>{formatTime(currentTime)}</span>

              <div className={styles.sliderTrack}>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className={styles.sliderRange}
                />
                <div
                  className={styles.sliderFill}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <span className={styles.timeText}>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right Column: Equalizer & Volume */}
          <div className={styles.rightControls}>
            {/* Equalizer Visualizer */}
            <div className={`${styles.equalizer} ${isPlaying ? styles.playing : ""}`}>
              <div className={styles.eqBar} />
              <div className={styles.eqBar} />
              <div className={styles.eqBar} />
              <div className={styles.eqBar} />
            </div>

            {/* Volume Control */}
            <div className={styles.volumeBox}>
              <button className={styles.volumeBtn} onClick={toggleMute} title="Volume">
                {isMuted || volume === 0 ? (
                  <svg viewBox="0 0 24 24" className={styles.iconStroke}>
                    <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className={styles.iconStroke}>
                    <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>

              <div className={styles.volumeSliderTrack}>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className={styles.volumeInput}
                />
                <div
                  className={styles.volumeFill}
                  style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
