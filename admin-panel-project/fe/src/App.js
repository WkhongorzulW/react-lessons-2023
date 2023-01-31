import { Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./pages/User";

function App() {
  return (
    <div className="App">
      <h1>Admin panel project</h1>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
