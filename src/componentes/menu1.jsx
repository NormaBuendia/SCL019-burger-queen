import data from '../data/menu'  

function Menu1(props) {
    return (
                
                
                <div className='background-mesa-cocina'>
                {data.bebestibles.map(element => {
                 return(<button className='btn btn-warning' id='btnMenu1'>{element.name}: {element.price}</button>)
                    
                }) 

                }
                </div>
                
    )
  }

  export default Menu1
  
