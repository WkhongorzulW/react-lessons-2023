import { useContext } from "react";
import "./App.css";
import List from "./components/List";
import { PlaceContext } from "./context/PlaceContext";

function App() {
  const [isLarge, setIsLarge] = useContext(PlaceContext);
  return (
    <div className="App">
      <label>Use Large Images</label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={(e) => {
          setIsLarge(e.target.checked);
        }}
      />
      <hr />
      <List />
    </div>
  );
}

export default App;
