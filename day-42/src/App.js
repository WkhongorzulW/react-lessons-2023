import './App.css';
import { useState } from "react"

function App() {
  const [users, setUsers] = useState([]);
  function handleRegister(e) {
    e.preventDefault();
    const user = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      password: e.target.password.value,
      confrimPassword: e.target.confrimPassword.value,
    };
    setUsers([...users, user]);
    console.log(users);
  }
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <label for="f-name">Firstname: </label>
        <input type="text" name="firstname" id="f-name"></input>
        <br />
        <label fro="l-name">Lastname: </label>
        <input type="text" name="lastname" id="l-name"></input>
        <br />
        <label for="pass">Password: </label>
        <input type="password" name="password"></input>
        <br />
        <label for="confirm-pass">Confirm Password: </label>
        <input type="password" name="confrimPassword" id="confirm-pass"></input>
        <br />
        <button>Register</button>
      </form>

      <h2>User Preview</h2>
      {users.map(u => {
        return (
          <div>
            <div>{u.firstname}</div>
            <div>{u.lastname}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
