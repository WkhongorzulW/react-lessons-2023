import { useEffect } from "react";
import { useState } from "react";
import timerData from "../components/data/data";
import EditableTimerList from "./EditableTimerList";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export default function TimerDashboard() {
  const [timers, setTimers] = useState({ timers: [] });
  useEffect(() => {
    setInterval(() => setTimers({ timers: timerData }), 1000);
  }, []);
  console.log(timerData);

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function deleteTimer(timerId) {
    setTimers({
      timers: timers.timers.filter((t) => t.id !== timerId),
    });
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function startTimer(timerId) {
    const now = Date.now();

    setTimers({
      timers: timers.timers.map((timer) => {
        if (timerId === timer.id) {
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  return (
    <div>
      <h1>Timers</h1>
      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
          />
        </div>
      )}
    </div>
  );
}
