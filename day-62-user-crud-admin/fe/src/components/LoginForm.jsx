import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm() {
  const LOGIN_URL = "http://localhost:8000/login";

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(LOGIN_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);

    if (FETCHED_JSON.status === "success") {
      toast("You approved to login");
      navigate("/users");
    } else {
      toast(FETCHED_JSON.status);
    }
  }
  return (
    <div>
      <h4>Login Form</h4>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              type="email"
              variant="filled"
              size="small"
              label="E-mail"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="password"
              type="password"
              variant="filled"
              size="small"
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
