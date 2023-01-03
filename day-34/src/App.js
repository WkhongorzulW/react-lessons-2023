import HelloWorld from "./HelloWorld"
import './App.css';

function App() {
  const user = {
    firstName: "Harper",
    lastName: "Perez"
  }
  function formatName(user){
    return user.firstName + " " + user.lastName;
  }
  // const element = (
  //   <h1 style={customStyle}>
  //     Hello, {formatName(user)}!
  //   </h1>
  // )

  const customStyle = {
    color: "pink",
    fontsize: "44px"
  }

  const name = "Khongorzul";
  const element = (<h1 style={customStyle}>Hello, {name}</h1>)
  const secondElement = (<p className="my-text">My next text</p>)

  return (
    <div>
      <div>hi</div>
      {element}
      {secondElement}
      <HelloWorld/>
    </div>
  );
}

export default App;
