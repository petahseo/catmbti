import './App.css';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question' element={<Question />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
