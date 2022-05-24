import "../App.css";
import Boton from "../componentes/Boton";
import Wimpy from "../componentes/Wimpy";

function Home() {
  return (
    <div className="App">
      <div className="cont-menu-1-y-2">
        <header className="App-header">
          <h1>Wimpy Burger</h1>
          <Wimpy />
        </header>
        <Boton />
      </div>
    </div>
  );
}

export default Home;
