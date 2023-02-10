import { useRef } from "react";

export default function InputFocus() {
  const inputUseRef = useRef(null);

  const handleFocus = () => {
    inputUseRef.current.focus();
  };
  const handleBlur = () => {
    inputUseRef.current.blur();
  };

  return (
    <div>
      <h1>Input Focus</h1>
      <input type="text" ref={inputUseRef} />
      <br />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleBlur}>Blur</button>
    </div>
  );
}
