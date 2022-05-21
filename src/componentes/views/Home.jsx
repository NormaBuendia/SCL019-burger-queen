import '../../App.css';
import Boton from './../Boton';
import Winpy from './../Winpy';


function Home() {
  return (
    <div className="App">
      <div className="cont-menu-1-y-2">
      <header className="App-header">
      <h1>Winpy Burger</h1>
      <Winpy/>
     </header>
     <Boton/>
     </div>
    </div>
  );
}

export default Home;
