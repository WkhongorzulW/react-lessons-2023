import "./App.css";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <Input label="First input: " text={text} handleChange={handleChange} />
      <Input label="Second input: " text={text} handleChange={handleChange} />
    </div>
  );
}

export default App;
