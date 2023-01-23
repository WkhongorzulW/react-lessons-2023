import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import Anime from "./components/Anime";
import Button from "./components/Button";
import TopAnime from "./components/TopAnime";
import Exercises from "./components/Exercise";
import FindEvenOdd from "./components/EvenOdd";
import PascalTriangle from "./components/PascalTriangle";

function App() {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      {/* <Input label="First input: " text={text} handleChange={handleChange} />
      <Input label="Second input: " text={text} handleChange={handleChange} />
      <Anime />
      <Button />
      <TopAnime /> */}
      <Exercises />
      <FindEvenOdd />
      <PascalTriangle />
    </div>
  );
}

export default App;
