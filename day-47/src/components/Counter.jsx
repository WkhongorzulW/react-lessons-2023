import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [hover, setHover] = useState();
  return (
    <div
      id="counter"
      className={hover}
      onPointerEnter={() => setHover("hover")}
      onPointerLeave={() => setHover("")}
    >
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add one
      </button>
    </div>
  );
}
