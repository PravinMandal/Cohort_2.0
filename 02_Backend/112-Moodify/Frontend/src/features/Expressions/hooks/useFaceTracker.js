import { useEffect, useRef, useState, useCallback } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const WASM_URL =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm";
const MODEL_URL =
  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";

/**
 * Custom hook that manages webcam + MediaPipe FaceLandmarker lifecycle.
 * Returns { videoRef, status, expressions, isReady }.
 */
export default function useFaceTracker() {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const rafRef = useRef(null);

  const [status, setStatus] = useState("initializing");
  const [expressions, setExpressions] = useState({});
  const [isReady, setIsReady] = useState(false);

  const detect = useCallback(() => {
    const video = videoRef.current;
    const landmarker = landmarkerRef.current;

    if (!landmarker || !video || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(detect);
      return;
    }

    const result = landmarker.detectForVideo(video, performance.now());

    if (result.faceBlendshapes?.length > 0) {
      const data = {};
      for (const shape of result.faceBlendshapes[0].categories) {
        data[shape.categoryName] = shape.score;
      }
      setExpressions(data);
    }

    rafRef.current = requestAnimationFrame(detect);
  }, []);

  useEffect(() => {
    let stream = null;
    let cancelled = false;

    async function init() {
      try {
        setStatus("loading-model");

        const vision = await FilesetResolver.forVisionTasks(WASM_URL);
        if (cancelled) return;

        landmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
          baseOptions: { modelAssetPath: MODEL_URL },
          runningMode: "VIDEO",
          numFaces: 1,
          outputFaceBlendshapes: true,
          outputFacialTransformationMatrixes: false,
        });
        if (cancelled) return;

        setStatus("requesting-camera");

        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720, facingMode: "user" },
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        videoRef.current.srcObject = stream;
        await videoRef.current.play();

        setIsReady(true);
        setStatus("tracking");
        detect();
      } catch (err) {
        console.error("FaceTracker init error:", err);
        setStatus(
          err.name === "NotAllowedError" ? "camera-denied" : "error"
        );
      }
    }

    init();

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, [detect]);

  return { videoRef, status, expressions, isReady };
}
