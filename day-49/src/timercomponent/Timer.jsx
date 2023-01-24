import { Card, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";

export default function Timer({ title, project, elapsed, runninSince }) {
  const [timerIsRunning, setTimerISRunning] = useState(false);

  const timer = renderElapsedString(elapsed, runninSince);

  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  const [timing, setTiming] = useState(false);

  function handleStart() {
    setTiming(!timing);
    if (!timing) {
      setStartTime(Date.now());
      setNow(Date.now());

      setInterval(() => {
        setNow(Date.now());
      }, 2000);
    }
  }

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
          isTimerRunning={timerIsRunning}
          onStartClick={() => {
            setTimerISRunning(true);
          }}
          onStopClick={() => {
            setTimerISRunning(false);
          }}
          handleStart={handleStart}
          timing={timing}
          setTiming={setTiming}
        />
      </Card>
    </Container>
  );
}
