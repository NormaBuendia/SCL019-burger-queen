import '../../App.css';
import Boton from './../Boton';
import Wimpy from './../Wimpy';


function Home() {
  return (
    <div className="App">
      <div className="cont-menu-1-y-2">
      <header className="App-header">
      <h1>Wimpy Burger</h1>
      <Wimpy/>
     </header>
     <Boton/>
     </div>
    </div>
  );
}

export default Home;
