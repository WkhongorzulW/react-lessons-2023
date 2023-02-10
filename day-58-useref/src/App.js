import { useContext } from "react";
import "./App.css";
import InputFocus from "./components/InputFocus";
import List from "./components/List";
import Stopwatch from "./components/Stopwatch";
import VideoPlayer from "./components/VideoPlayer";
import { PlaceContext } from "./context/PlaceContext";

function App() {
  const [isLarge, setIsLarge] = useContext(PlaceContext);
  return (
    <div className="App">
      <h1>Day-58 useRef Hook</h1>
      {/* <label>Use Large Images</label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={(e) => {
          setIsLarge(e.target.checked);
        }}
      />
      <hr />
      <List /> */}
      {/* <Stopwatch /> */}
      {/* <InputFocus /> */}
      <VideoPlayer />
    </div>
  );
}

export default App;
