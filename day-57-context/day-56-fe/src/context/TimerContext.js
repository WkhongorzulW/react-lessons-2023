import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import timerData from "../data/data.js";

const TimerContext = createContext(null);

const TimerContextProvider = ({ children }) => {
  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 1000);
  }, []);

  return (
    <TimerContext.Provider value={[timers, setTimers]}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
