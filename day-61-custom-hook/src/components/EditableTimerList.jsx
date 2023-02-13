import EditableTimer from "./EditableTimer.jsx";
import { TimerContext } from "../context/TimerContext";
import { useContext } from "react";

export default function EditableTimerList() {
  const { timers } = useContext(TimerContext);

  const timerList = timers.timers.map((timer, index) => (
    <EditableTimer
      key={index}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
    />
  ));

  return <div>{timerList}</div>;
}
