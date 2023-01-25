import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function TimerForm({
  title,
  project,
  id,
  onFormSubmit,
  onFormClose,
}) {
  const submitText = id ? "Update" : "Create";

  const [timer, setTimer] = useState({
    title: title || " ",
    project: project || "",
  });

  function handleTilteChange(e) {
    setTimer({
      ...timer,
      title: e.target.value,
    });
  }

  function handleProjectChange(e) {
    setTimer({
      ...timer,
      project: e.target.value,
    });
  }

  return (
    <div>
      <h1>Timer Form</h1>
      <Grid>
        <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    type={"text"}
                    placeholder={timer.title}
                    label={"Title"}
                    value={timer.title}
                    variant={"outlined"}
                    fullWidth={"true"}
                    onChange={handleTilteChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type={"text"}
                    placeholder={timer.project}
                    label={"Project"}
                    value={timer.project}
                    variant={"outlined"}
                    fullWidth={"true"}
                    onChange={handleProjectChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color={"success"}
                    variant={"outlined"}
                    onClick={onFormSubmit}
                  >
                    {submitText}
                  </Button>{" "}
                  <Button
                    color={"error"}
                    variant={"outlined"}
                    onClick={onFormClose}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
