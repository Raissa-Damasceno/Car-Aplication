import './App.css';
import './index.css'
import { Routes, Route } from "react-router-dom";

import CarsList from './components/CarsList/CarsList'
import Home from './components/HomePage/Home'
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <>    
    <NavBar />
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<CarsList />} />
    </Routes>
    </div>
    </>

  );
}

export default App;
