import "./App.css";
import { useEffect, useState } from "react";
import {
  fetchAllData,
  deleteUser,
  updateUser,
  createUser,
} from "./services/axiosUsersServices";

function App() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    username: "",
    age: "",
  };

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData(URL, setUsers);
  }, []);

  /*---------------- POST & PUT REQUESTS ---------------*/

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isUpdate) {
      updateUser(e, URL, setUsers);
    } else {
      createUser(
        currentUser,
        URL,
        setUsers,
        setIsUpdate,
        setCurrentUser,
        newUser
      );
    }
  }

  /*-------------- DELETE FUNCTION 'DELETE REQUEST' -------------*/
  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers);
  }

  /*------------------ EDIT FUNCTION -------------------*/
  async function handleEdit(userId) {
    setIsUpdate(true);

    const filteredUser = users.filter((user) => user.id === userId)[0];

    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        username: filteredUser.username,
        age: filteredUser.age,
      });
    }
  }

  /*--------------- UPDATING USER DATA ----------------*/
  function handleUsername(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }
  function handleUserAge(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }
  /*==================================================*/

  return (
    <div className="App">
      <h1>Day-52 Node-JS FS Module</h1>
      <h3>Create user form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input
            name="username"
            value={currentUser.username}
            onChange={handleUsername}
          ></input>
        </label>
        <br />
        <label>
          Age:
          <input
            name="age"
            value={currentUser.age}
            onChange={handleUserAge}
          ></input>
        </label>
        <br />
        <button>{isUpdate ? "Update" : "Submit"}</button>
      </form>

      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}{" "}
                <button onClick={() => handleEdit(user.id)}>Edit</button>{" "}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </p>{" "}
            </div>
          );
        })}
    </div>
  );
}

export default App;
