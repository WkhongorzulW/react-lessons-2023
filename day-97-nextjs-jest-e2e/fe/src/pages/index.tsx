import { useState } from "react";

export default function Home() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  function add() {
    setResult(Number(num1) + Number(num2));
  }
  function subtract() {
    setResult(num1 - num2);
  }
  function multiply() {
    setResult(num1 * num2);
  }
  function divide() {
    setResult(num1 / num2);
  }
  return (
    <div className="container">
      <div className="result" data-testid="result">
        {result}
      </div>
      <input
        className="input"
        type="number"
        value={num1}
        data-testid="num1"
        onChange={(e: any) => setNum1(parseInt(e.target.value))}
      />
      <input
        className="input"
        type="number"
        value={num2}
        data-testid="num2"
        onChange={(e: any) => setNum2(parseInt(e.target.value))}
      />
      <button onClick={add} data-testid="add" className="button">
        Add
      </button>
      <button onClick={subtract} data-testid="subtract" className="button">
        Subtract
      </button>
      <button onClick={multiply} data-testid="multiply" className="button">
        Multiply
      </button>
      <button onClick={divide} data-testid="divide" className="button">
        Divide
      </button>
    </div>
  );
}
