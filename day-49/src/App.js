import { useState } from "react";
import "./App.css";
import Timer from "./timercomponent/Timer";
import TimerDashboard from "./timercomponent/TimerDashboard";

function App() {
  return (
    <div className="App">
      <h1>Timer App</h1>
      <TimerDashboard />
    </div>
  );
}

export default App;
