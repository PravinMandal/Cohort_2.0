/**
 * Averages left/right blendshape pairs into a single value.
 */
export function deriveSignals(raw) {
  const g = (key) => raw[key] || 0;
  const avg = (l, r) => (g(l) + g(r)) / 2;

  return {
    smile:          avg("mouthSmileLeft", "mouthSmileRight"),
    browDown:       avg("browDownLeft", "browDownRight"),
    browInnerUp:    g("browInnerUp"),
    browOuterUp:    avg("browOuterUpLeft", "browOuterUpRight"),
    eyeWide:        avg("eyeWideLeft", "eyeWideRight"),
    eyeSquint:      avg("eyeSquintLeft", "eyeSquintRight"),
    eyeLookDown:    avg("eyeLookDownLeft", "eyeLookDownRight"),
    mouthFrown:     avg("mouthFrownLeft", "mouthFrownRight"),
    mouthLowerDown: avg("mouthLowerDownLeft", "mouthLowerDownRight"),
    mouthPress:     avg("mouthPressLeft", "mouthPressRight"),
    cheekSquint:    avg("cheekSquintLeft", "cheekSquintRight"),
    jawOpen:        g("jawOpen"),
    mouthDimple:    avg("mouthDimpleLeft", "mouthDimpleRight"),
    mouthShrugLower: g("mouthShrugLower"),
  };
}

export const MOOD_RULES = [
  {
    mood: "Happy",
    emoji: "\u{1F604}",
    color: "#FFD93D",
    calc: (s) => {
      const base = s.smile * 0.55 + s.cheekSquint * 0.25 + s.mouthDimple * 0.20;
      const penalty = s.mouthFrown * 0.3 + s.browDown * 0.2;
      return Math.max(0, base - penalty);
    },
    threshold: 0.28,
  },
  {
    mood: "Sad",
    emoji: "\u{1F622}",
    color: "#74B9FF",
    calc: (s) => {
      const base =
        s.mouthFrown * 0.25 +
        s.browDown * 0.20 +
        s.browInnerUp * 0.20 +
        s.mouthPress * 0.15 +
        s.mouthLowerDown * 0.10 +
        s.eyeLookDown * 0.10;
      const penalty = s.smile * 0.6 + s.eyeWide * 0.3 + s.cheekSquint * 0.2;
      return Math.max(0, base - penalty);
    },
    threshold: 0.18,
  },
  {
    mood: "Surprised",
    emoji: "\u{1F632}",
    color: "#FDCB6E",
    calc: (s) => {
      const activeBrowUp = Math.max(0, s.browInnerUp - 0.25);
      const base =
        s.eyeWide * 0.35 +
        s.browOuterUp * 0.25 +
        activeBrowUp * 0.20 +
        s.jawOpen * 0.20;
      const penalty = s.browDown * 0.4 + s.eyeSquint * 0.3 + s.smile * 0.15;
      return Math.max(0, base - penalty);
    },
    threshold: 0.30,
  },
];

const EMOJI_MAP = {
  Happy: "\u{1F604}",
  Sad: "\u{1F622}",
  Surprised: "\u{1F632}",
  Neutral: "\u{1F610}",
};

/**
 * Detect mood from raw blendshape data.
 * Returns { mood, emoji, color, confidence, scores }.
 */
export function detectMood(rawExpressions) {
  if (!rawExpressions || Object.keys(rawExpressions).length === 0) {
    return {
      mood: "Neutral",
      emoji: EMOJI_MAP.Neutral,
      color: "#DFE6E9",
      confidence: 0,
      scores: { Happy: 0, Sad: 0, Surprised: 0 },
    };
  }

  const signals = deriveSignals(rawExpressions);

  const scores = {};
  let best = { mood: "Neutral", emoji: EMOJI_MAP.Neutral, color: "#DFE6E9", score: 0 };

  for (const rule of MOOD_RULES) {
    const score = Math.max(0, Math.min(1, rule.calc(signals)));
    scores[rule.mood] = score;

    if (score > rule.threshold && score > best.score) {
      best = { mood: rule.mood, emoji: rule.emoji, color: rule.color, score };
    }
  }

  return {
    mood: best.mood,
    emoji: best.emoji,
    color: best.color,
    confidence: best.score,
    scores,
  };
}
