import { useRef, useState } from "react";

export default function PlayVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div>
      <h1>VIDEO PLAYER USEREF</h1>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <br />
      <br />
      <video
        width="500"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRroqGARTLU6csaPqdR7_5q_cFCgeLPNPM-GA"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
