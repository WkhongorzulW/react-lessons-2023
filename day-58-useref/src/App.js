import { useContext } from "react";
import "./App.css";
import List from "./components/List";
import PlayVideo from "./components/PlayVideo";
import Stopwatch from "./components/Stopwatch";
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
      <PlayVideo />
    </div>
  );
}

export default App;
