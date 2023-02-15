import "./App.css";
import UserRegisterForm from "./components/UserRegisterForm";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import LoginForm from "./components/LoginForm";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <h1>Day-62 User Login CRUD</h1>
      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
