import { useState, useCallback } from "react";
import { detectMood, MOOD_RULES } from "../utils/moodDetector";

export default function useMoodDetector(expressions) {
  const [detectedMood, setDetectedMood] = useState(null);
  const [hasDetected, setHasDetected] = useState(false);

  const captureMood = useCallback(() => {
    const result = detectMood(expressions);
    setDetectedMood(result);
    setHasDetected(true);
  }, [expressions]);

  return {
    detectedMood,
    hasDetected,
    captureMood,
    allMoods: MOOD_RULES,
  };
}
