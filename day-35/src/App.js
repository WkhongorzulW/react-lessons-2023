import './App.css';


function Profile({img, name, age, email}){
  return(
    <div className="profile">
      <img src={img} alt="profile image"></img>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <div>email: {email}</div>
    </div>
  )
}
function App() {
  return (
    <div className="app">
      <Profile
        img="img/download.jpeg"
        name="Herro Fiennes Tiffin"
        age={25}
        email="hero.tiffin@gmail.com"
      />
      <Profile
        img="img/download (1).jpeg"
        name="Josephine Langford"
        age={23}
        email="jose.langford@gmail.com"
      />
    </div>
  );
}

export default App;
