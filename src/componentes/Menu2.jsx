import data from '../data/menu'  

function Menu2(props) {
    return (
                <div>
                
                <div className='background-mesa-cocina'>
                    <div className='menu2'>
                {data.platos.map(element => {
                 return(<button className='btn btn-warning'>{element.name}: {element.price}</button>)
                    
                }) 

                }
                </div>
                </div>
                </div>
    )
  }

  export default Menu2
  
