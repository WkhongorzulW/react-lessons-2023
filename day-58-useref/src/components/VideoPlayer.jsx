import { useState } from "react";
import { useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div>
      <h1>Video Player</h1>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <br />
      <br />

      <video
        width="350"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcS_iHN1iFkF8rJRAh98XKGsFCjuTM-GS4liVg"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
