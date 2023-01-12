import logo from './logo.svg';
import './App.css';
import { Click } from './components/Click';
import Counter from './components/Counter';

function App() {
  return (
    <div className='box'>
      <Click />
      <Counter />
    </div>
  )
}

export default App;
