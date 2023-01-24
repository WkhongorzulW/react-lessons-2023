import { useState } from "react";

export default function Counter(props) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);
  let className = "counter";

  if (hover) {
    className += " hover";
  }
  if (props.isFancy) {
    className += " fancy";
  }

  return (
    <div className="box">
      <div
        id="counter"
        onPointerEnter={() => {
          setHover(true);
        }}
        onPointerLeave={() => {
          setHover(false);
        }}
        className={className}
      >
        <h1>{score}</h1>
        <button onClick={() => setScore(score + 1)}>Add one</button>
      </div>
    </div>
  );
}
