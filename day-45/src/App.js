import "./App.css";
import AccordionFunc from "./components/Accordion";
import Login from "./components/LogIn";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/accordion" element={<AccordionFunc />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
