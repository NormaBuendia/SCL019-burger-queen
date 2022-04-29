
const Menu1 = () => {
    //Aquí va la lógica
    
  return (
    <div className="content-Menu-1">
        <div class="row">
        <main id="items" class="col-sm-8 row"></main>
         <aside class="col-sm-4">
            <h2>Carrito</h2>
            <ul id="carrito" class="list-group"></ul>
               <p class="text-right">Total: <span id="total"></span>&euro;</p>
            <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
        </aside>
    </div> 
      
    </div>
  )
}

export default Menu1