import data from '../data/menu'  

function Menu2(props) {
    


    return (
                
                
                  <div data-content id='content-menu2'>
                {data.platos.map(element => {
                 return(<button className='btn btn-warning' id='btnMenu2'>{element.name}: {element.price}</button>)
                    
                }) 

                }
                

                </div>
                
                
    )
  }

  export default Menu2
  
