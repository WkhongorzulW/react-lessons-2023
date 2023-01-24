import Counter from "./Counter";
import { useState } from "react";

export default function Fancy() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <div>
      <Counter isFancy={isFancy} />
      <label htmlFor="check">
        <input
          type="checkbox"
          name="check"
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
          checked={isFancy}
        />
        Use fancy styling
      </label>
    </div>
  );
}
