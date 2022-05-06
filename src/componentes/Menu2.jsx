import data from "../data/menu";

function Menu2(props) {
  return (
    <div id="content">
      <div data-content id="menu2">
        {data.platos.map((element) => {
          return (
            <button className="btn btn-warning" id="btnMenu2" key={element.id}>
             {props.name} {element.name}: {element.badge}{element.price}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Menu2;
