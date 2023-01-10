import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import AlertButton from "./AlertFunc";
import Toolbar from "./ToolBar";
import ToolBarNext from "./ToolBarNext";
import ParentToolBar from "./ParentToolBar";
import SignUp from "./SignUp";

function App() {
  return (
    <div>
      <h1>Day 38</h1>
      <div><Button /></div>
      <div><Toolbar /></div>
      <div><ToolBarNext /></div>
      <div><ParentToolBar /></div>
      <div><SignUp /></div>
    </div>
  )
}

export default App;
