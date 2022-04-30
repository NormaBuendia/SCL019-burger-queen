import data from '../data/menu'  

function Menu1(props) {
    


    return (
                
                
                <div className='background-mesa-cocina' id='content'>
                  <div className='menu1' id='content-menu1'>
                {data.bebestibles.map(element => {
                 return(<button className='btn btn-warning' id='btnMenu1'>{element.name}: {element.price}</button>)
                    
                }) 

                }
                </div>
                  <div className='menu2' id='content-menu2'>
                {data.platos.map(element => {
                 return(<button className='btn btn-warning' id='btnMenu2'>{element.name}: {element.price}</button>)
                    
                }) 

                }
                

                </div>
                </div>
                
    )
  }

  export default Menu1
  
