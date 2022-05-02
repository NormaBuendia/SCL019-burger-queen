import data from "../data/menu";

function Menu1(props) {
  return (
    <div id="content">
      <div data-content id="menu1">
        {data.bebestibles.map((element) => {
          return (
            <button className="btn btn-warning" id="btnMenu1">
              {element.name}: {element.price}
            </button>
          );
        })}
      </div>
      <div data-content id="menu2">
        {data.platos.map((element) => {
          return (
            <button className="btn btn-warning" id="btnMenu2">
              {element.name}: {element.price}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Menu1;
