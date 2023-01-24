import { Card, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";
import { useEffect } from "react";

export default function Timer({ title, project, elapsed, runninSince }) {
  const [timerIsRunning, setTimerISRunning] = useState(false);
  const [timerIsPaused, setTimerISPaused] = useState(true);

  const timer = renderElapsedString(elapsed, runninSince);

  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  useEffect(() => {
    let interval = null;

    if (timerIsRunning && timerIsPaused === false) {
      interval = setInterval(() => {
        setNow((now) => now + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerIsRunning, timerIsPaused]);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    setTimerISRunning(true);
    setTimerISPaused(false);
  };

  const handlePause = () => {
    setTimerISPaused(!timerIsPaused);
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <Container maxWidth="sm" sx={{ marginBottom: 2 }}>
      <Card sx={{ maxWidth: 345, margin: "0 auto", padding: 2 }}>
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{secondsPassed}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{timer}</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 3,
          }}
        >
          <DeleteOutlineOutlinedIcon />
          <ModeEditOutlinedIcon />
        </Box>
        <TimerActionButton
          timerIsRunning={timerIsRunning}
          timerIsPaused={timerIsPaused}
          onStartClick={() => {
            setTimerISRunning(true);
          }}
          onStopClick={() => {
            setTimerISRunning(false);
          }}
          handleStart={handleStart}
          handlePause={handlePause}
        />
      </Card>
    </Container>
  );
}
