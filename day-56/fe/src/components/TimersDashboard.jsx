import { useEffect, useState } from "react";
import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import projects from "../data/data.js";
import axios from "axios";

export default function TimersDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  const URL = "http://localhost:8080/timers";

  useEffect(() => {
    fetchTimersData();
  }, []);

  // useEffect(() => {
  //   setInterval(() => setTimers({ timers: projects }), 1000);
  // }, []);

  async function fetchTimersData() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();

    setTimers({ timers: FETCHED_JSON.data });
    console.log(FETCHED_JSON);
  }

  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }

  function handleEditFormSubmit(attrs) {
    updateTimer(attrs);
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function handleStopClick(timerId) {
    stopTimer(timerId);
  }

  async function createTimer(timer) {
    const t = newTimer(timer);
    console.log(t);
    const FETCHED_DATA = await axios({
      url: URL,
      method: "POST",
      data: t,
    });
    console.log(FETCHED_DATA);
    setTimers({ timers: FETCHED_DATA.data.data });
  }

  function startTimer(timerId) {
    const now = Date.now();
    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          console.log(timer);
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  function stopTimer(timerId) {
    const now = Date.now();

    setTimers({
      timers: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  async function updateTimer(attrs) {
    const FETCHED_DATA = await axios({
      url: URL,
      method: "PUT",
      data: {
        title: attrs.title,
        project: attrs.project,
        elapsed: attrs.elapsed,
        id: attrs.id,
      },
    });
    setTimers({ timers: FETCHED_DATA.data.data });
  }

  async function deleteTimer(timerId) {
    const FETCHED_DATA = await axios({
      url: URL,
      method: "DELETE",
      data: {
        timerId: timerId,
      },
    });
    setTimers({
      timers: FETCHED_DATA.data.data,
    });
  }

  return (
    <div>
      <h1>Timers</h1>
      {timers.timers && (
        <div>
          <EditableTimerList
            timers={timers.timers}
            onFormSubmit={handleEditFormSubmit}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
            onStopClick={handleStopClick}
          />
          <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        </div>
      )}
    </div>
  );
}
