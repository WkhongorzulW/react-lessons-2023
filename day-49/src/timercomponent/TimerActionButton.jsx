import { Button } from "@mui/material";

export default function TimerActionButton({
  timerIsRunning,
  onStartClick,
  onStopClick,
  handleStart,
  handlePause,
}) {
  return (
    <div>
      {timerIsRunning ? (
        <Button
          color={"error"}
          fullWidth={true}
          variant={"outlined"}
          // onClick={(onStopClick, handlePause)}
        >
          Stop
        </Button>
      ) : (
        <Button
          color={"success"}
          fullWidth={true}
          variant={"outlined"}
          onClick={onStartClick}
        >
          Start
        </Button>
      )}
    </div>
  );
}
