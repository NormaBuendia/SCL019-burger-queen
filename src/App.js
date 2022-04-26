// import logo from './logo.svg';
import './App.css';
import Home from './componentes/Home';
import Mesa from './componentes/Mesa';
import Cocina from './componentes/Cocina';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/' element={<Mesa/>} />
    <Route path='/' element={<Cocina/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
