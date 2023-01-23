import { useState } from "react";

export default function PascalTriangle() {
  const [rows, setRows] = useState(5);
  const [triangle, setTriangle] = useState([]);

  const generateTriangle = (numRows) => {
    let triangle = [[1]];
    for (let i = 1; i < numRows; i++) {
      let currentRow = [1];
      for (let j = 1; j < i; j++) {
        currentRow[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
      currentRow.push(1);
      triangle.push(currentRow);
    }
    setTriangle(triangle);
  };

  return (
    <div>
      <input
        type="number"
        value={rows}
        onChange={(e) => setRows(e.target.value)}
      />
      <button onClick={() => generateTriangle(rows)}>Generate</button>
      <br />
      <br />
      {triangle.map((row, i) => (
        <div key={i}>
          {row.map((num, j) => (
            <span key={j}>{num} </span>
          ))}
        </div>
      ))}
    </div>
  );
}
