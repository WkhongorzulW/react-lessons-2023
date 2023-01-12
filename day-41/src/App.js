import logo from './logo.svg';
import './App.css';
import { Click } from './components/Click';
import Counter from './components/Counter';
import UpdateArray from './components/UpdateArray';
import List from './components/SpreadArray';
import UpdatingObjects from './components/UpdatingObjects';
import Exercises from './components/Exercises';

  function App() {
    return (
      <div className='box'>
        <div>
          <Exercises />
        </div>
        {/* <UpdatingObjects />
        <List />
        <Click />
        <Counter />
        <UpdateArray /> */}
      </div>
    )
  }

export default App;
