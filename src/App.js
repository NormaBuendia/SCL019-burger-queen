// import logo from './logo.svg';
import './App.css';
import Home from './componentes/Home';
import Mesa from './componentes/Mesa';
import Cocina from './componentes/Cocina';
import NotFound from './componentes/NotFound';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/mesa' element={<Mesa/>} />
    <Route path='/cocina' element={<Cocina/>} />
    <Route path='*' element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
