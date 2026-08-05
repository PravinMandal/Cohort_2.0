import { useEffect, useRef, useState } from "react";
import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";

export default function FaceExpressionTracker() {
  const videoRef = useRef(null);

  const faceLandmarkerRef = useRef(null);

  const animationFrame = useRef();

  const [loading, setLoading] = useState(true);

  const [expressions, setExpressions] = useState({});

  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    let stream;

    async function initialize() {
      try {
        setStatus("Loading MediaPipe...");

        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        faceLandmarkerRef.current =
          await FaceLandmarker.createFromOptions(
            vision,
            {
              baseOptions: {
                modelAssetPath:
                  "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
              },

              runningMode: "VIDEO",

              numFaces: 1,

              outputFaceBlendshapes: true,

              outputFacialTransformationMatrixes: true,
            }
          );

        setStatus("Opening Camera...");

        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: 1280,
            height: 720,
            facingMode: "user",
          },
        });

        videoRef.current.srcObject = stream;

        await videoRef.current.play();

        setLoading(false);

        setStatus("Tracking Face");

        detect();
      } catch (err) {
        console.error(err);
        setStatus("Camera Permission Denied");
      }
    }

    function detect() {
      if (
        !faceLandmarkerRef.current ||
        !videoRef.current ||
        videoRef.current.readyState < 2
      ) {
        animationFrame.current = requestAnimationFrame(detect);
        return;
      }

      const result =
        faceLandmarkerRef.current.detectForVideo(
          videoRef.current,
          performance.now()
        );

      if (result.faceBlendshapes.length > 0) {
        const blendShapes =
          result.faceBlendshapes[0].categories;

        const data = {};

        blendShapes.forEach((shape) => {
          data[shape.categoryName] = Number(
            shape.score.toFixed(3)
          );
        });

        setExpressions(data);
      }

      animationFrame.current =
        requestAnimationFrame(detect);
    }

    initialize();

    return () => {
      cancelAnimationFrame(animationFrame.current);

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const smile =
    (
      (expressions.mouthSmileLeft || 0) +
      (expressions.mouthSmileRight || 0)
    ) / 2;

  const eyeBlinkLeft = expressions.eyeBlinkLeft || 0;
  const eyeBlinkRight = expressions.eyeBlinkRight || 0;
  const blink = (eyeBlinkLeft + eyeBlinkRight) / 2;

  const eyeSquint =
    (
      (expressions.eyeSquintLeft || 0) +
      (expressions.eyeSquintRight || 0)
    ) / 2;

  const eyeWide =
    (
      (expressions.eyeWideLeft || 0) +
      (expressions.eyeWideRight || 0)
    ) / 2;

  const browDown =
    (
      (expressions.browDownLeft || 0) +
      (expressions.browDownRight || 0)
    ) / 2;

  const noseSneer =
    (
      (expressions.noseSneerLeft || 0) +
      (expressions.noseSneerRight || 0)
    ) / 2;

  const mouthLowerDown =
    (
      (expressions.mouthLowerDownLeft || 0) +
      (expressions.mouthLowerDownRight || 0)
    ) / 2;

  const cheekPuff = expressions.cheekPuff || 0;
  const mouthPucker = expressions.mouthPucker || 0;
  const mouthPress = expressions.mouthPress || 0;
  const mouthShrugUpper = expressions.mouthShrugUpper || 0;
  const mouthShrugLower = expressions.mouthShrugLower || 0;
  const jawOpen = expressions.jawOpen || 0;

  const topExpressions = Object.entries(expressions)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const currentExpression = (() => {
    const happyScore = smile;
    const sadScore = Math.min(1, mouthLowerDown + browDown * 0.4);
    const surprisedScore = Math.min(1, (jawOpen + eyeWide) / 2);

    if (happyScore > 0.35) return "Happy";
    if (surprisedScore > 0.35) return "Surprised";
    if (sadScore > 0.08) return "Sad";

    return "Neutral";
  })();

  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        padding: 20,
        alignItems: "flex-start",
      }}
    >
      <div>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          style={{
            width: 640,
            borderRadius: 12,
            border: "2px solid #444",
          }}
        />

        <p>{status}</p>
      </div>

      <div
        style={{
          width: 350,
          background: "#111",
          color: "white",
          padding: 20,
          borderRadius: 10,
          fontFamily: "monospace",
        }}
      >
        <h2>Expressions</h2>

        <p>
          🎯 Current Expression :
          {" "}
          <strong>{currentExpression}</strong>
        </p>

        <p>
          😊 Smile :
          {" "}
          {smile.toFixed(2)}
        </p>

        <p>
          😮 Mouth Open :
          {" "}
          {jawOpen.toFixed(2)}
        </p>

        <p>
          😉 Blink :
          {" "}
          {blink.toFixed(2)}
        </p>

        <p>
          😌 Eye Squint :
          {" "}
          {eyeSquint.toFixed(2)}
        </p>

        <p>
          😲 Eye Wide :
          {" "}
          {eyeWide.toFixed(2)}
        </p>

        <p>
          😤 Brow Down :
          {" "}
          {browDown.toFixed(2)}
        </p>

        <p>
          👃 Nose Sneer :
          {" "}
          {noseSneer.toFixed(2)}
        </p>

        <p>
          💋 Mouth Pucker :
          {" "}
          {mouthPucker.toFixed(2)}
        </p>

        <p>
          🫦 Cheek Puff :
          {" "}
          {cheekPuff.toFixed(2)}
        </p>

        <hr />

        <h3>Top Detected Scores</h3>
        <ul>
          {topExpressions.map(([name, value]) => (
            <li key={name}>
              {name} : {value.toFixed(3)}
            </li>
          ))}
        </ul>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <pre
            style={{
              fontSize: 12,
              overflowY: "auto",
              maxHeight: 450,
            }}
          >
            {JSON.stringify(expressions, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}