import data from "../data/menu";

function Menu(props) {
  return (
    <div id="content">
      <div data-content id="menu1" className="active">
        {data.bebestibles.map((element) => {
          return (
            <button className="btn btn-warning" id="btnMenu1" key={element.id}>

              {element.name}: {element.badge}{element.price} 
            </button>
          );
        })}
      </div>
      
    </div>
  );
}
export default Menu;
