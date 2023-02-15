import TextField from "@mui/material/TextField";
import { Button, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function UserRegisterForm() {
  const URL = "http://localhost:8000/register";
  const ROLE_URL = "http://localhost:8000/users/roles";

  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrenRole] = useState(0);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  }

  function handleSelectChange(e) {
    setCurrenRole(e.target.value);
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
      role: currentRole,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const FETCHET_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHET_DATA.json();
    console.log(FETCHED_JSON);

    if (FETCHED_JSON) {
      navigate("/users");
    }
  };
  return (
    <div>
      <h4>User register Form</h4>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              name="firstname"
              variant="filled"
              size="small"
              label="First name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastname"
              name="lastname"
              variant="filled"
              size="small"
              label="Last name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              variant="filled"
              size="small"
              label="E mail"
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
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              variant="filled"
              size="small"
              label="Confirm Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="adress"
              name="address"
              variant="filled"
              size="small"
              label="Address"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>User Roles</InputLabel>
            <Select
              id="role-selector"
              value={currentRole}
              label="Roles"
              onChange={handleSelectChange}
            >
              {roles &&
                roles.map((role, index) => {
                  return (
                    <MenuItem key={index} value={role.id}>
                      {role.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
