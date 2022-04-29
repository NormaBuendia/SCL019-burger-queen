import '../../App.css';
import Boton from './../Boton';
import Winpy from './../Winpy';


function Home() {
  return (
    <div className="App">
      <div className="content">
      <header className="App-header">
      <h1>Winpy Burguer</h1>
      <Winpy/>
     </header>
     
     <Boton/>
     </div>
    </div>
  );
}

export default Home;
