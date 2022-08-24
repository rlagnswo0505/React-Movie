import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CoinTracket from './CoinTracket';
import TodoApp from './TodoApp';
import MovieApp from './MovieApp';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<TodoApp />}></Route>
        <Route path="/coin" element={<CoinTracket />}></Route>
        <Route path="/movie" element={<MovieApp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
