import './App.css';
import AccordionFunc from './components/Accordion';
import {Route, Routes} from "react-router-dom";
import Index from './components/Index';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Movies from './components/Movies';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/accordion"} element={<AccordionFunc />} />
        <Route path={"/"} element={<Index />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movie/:id"} element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
