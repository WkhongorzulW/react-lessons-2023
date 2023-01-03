import product1 from './products/image-yellow.png';
import product2 from './products/image-aqua.png';
import product3 from './products/image-steel.png';
import product4 from './products/image-rose.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products</h1>
        <hr/>

        <div className="product">
          <img src={product1}/>
          <div>
            <strong><i class="fa-solid fa-caret-up"></i> 55</strong>
            <div className="blue">Haught or Naught</div>
            <div>High-minded or absent-minded? You decide.</div>
            <div className="submit">Submitted by: <img className="profile" src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000"/></div>
          </div>
        </div>

        <div className="product">
          <img src={product2}/>
          <div>
            <strong><i class="fa-solid fa-caret-up"></i> 44</strong>
            <div className="blue">Yellow Pail</div>
            <div>One-demand scand castle construction experyise.</div>
            <div className="submit">Submitted by: <img className="profile" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/></div>
          </div>
        </div>

        <div className="product">
          <img src={product3}/>
          <div>
            <strong><i class="fa-solid fa-caret-up"></i> 42</strong>
            <div className="blue">Tinfoild: Tailored tinfoil hats</div>
            <div>We already have your measurements and shipping address.</div>
            <div className="submit">Submitted by: <img className="profile" src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58483.jpg?w=2000"/></div>
          </div>
        </div>

        <div className="product">
          <img src={product4}/>
          <div>
            <strong><i class="fa-solid fa-caret-up"></i> 23</strong>
            <div className="blue">Spuperamjoritory: The Fantacy Congress League</div>
            <div>Earn points when your favorite poliiticians pass ligeslation.</div>
            <div className="submit">Submitted by: <img className="profile" src="https://img.freepik.com/premium-vector/symbol-male-user-icon-circle-profile-icon-vector-illustration_276184-154.jpg?w=2000"/></div>
          </div>
        </div>

      </header>
    </div>
  );
}


export default App;