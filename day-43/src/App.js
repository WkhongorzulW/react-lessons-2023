import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Home from './components/Home';
import Test from './components/Test';
import FeedBackForm from './components/Feedback';
import Usukhuu from './components/About/Usukhuu';
import Khangai from './components/About/Khangai';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <h1>Day-43 React-Router</h1>
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/Test"}>About</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/feedback"}>Feedback</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about/*" element={<About />}>
          <Route path="khangai" element={<Khangai />} />
          <Route path="usukhuu" element={<Usukhuu />} />
          <Route path="about" element={<Test />} />
        </Route>

        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedBackForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
