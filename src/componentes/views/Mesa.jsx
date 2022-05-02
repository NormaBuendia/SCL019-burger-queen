import '../../App.css';
import React from "react";
import Back from "../Back";
import Menu1 from "../Menu1";



function Mesa() {

  const targets = document.querySelectorAll('[data-target]')
  const content = document.querySelectorAll('[data-content]')
  
  targets.forEach(target => {
    target.addEventListener('click', () => {
      content.forEach(c => {
        c.classList.remove('active')
      })
      const t = document.querySelector(target.dataset.target)
      t.classList.add('active')
    })
  })


   
     return (
       <div className="App">
        <div className="cont">
          <header className>
              <h1>Winpy Burguer</h1>
             <Back/>
            </header>             
            <button data-target='#menu1' className='btn btn-danger' id='comidas'>Comidas</button> 
             <button data-target='#menu2' className='btn btn-danger' id='bebidas'>Bebidas</button>  
             <div className='cont-menu'>
             <div className='background-mesa-cocina'>     
        <Menu1/>
        
          </div>
      </div>
      </div>
      </div>
    );
}

export default Mesa;