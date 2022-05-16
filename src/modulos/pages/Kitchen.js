// import React, {useState, useEffect} from 'react'
// import Header from '../Header'
// import logo from "../img/Logotipo1.png";
// import { slideInUp } from "react-animations";
// // import { Link } from 'react-router-dom'
// import {
  
//   // addDoc,
//   getDocs,
//   collection
//   // Timestamp,
// } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
// import { db } from "../Firebase/firebase_conf.js";


// const Kitchen = () => {
// // estado de pedidos
// const [pedidos,setPedidos] = useState([])
// //variable para traer la coleccion
// const pedidosCollectionRef = collection(db, 'pedidos');

// // se usa para llamar a Api
// //la funcion que se va a ejecutar para traer los pedidos de FS, recibe 2 argumentos
// //el primer argumento es una funcion y esa, es la que queremos que se ejecute como un efecto secundario, y eso va a ocurrir suando se cargue
// //la pagina, cuando carguemos el documento por primera vez, useEffects se va a ejecutar
// // esto hacemos para llamar a un link distinto para traer informacion

// useEffect(() => {
//   const getPedidos = async () => {
//     const data = await getDocs(pedidosCollectionRef);
//    console.log(data);
//     setPedidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };
//   getPedidos();
// }, []);
// console.log(pedidos);


//   return (
//   <div className="app">
//       <div className="cont">
//         <Header img={logo} alt="logo" animationType={slideInUp} />
//       </div>
//       <aside className="row cont-menu">
//         <table>
//          <thead>
         
//            <tr className="pedido-kitchen btn btn-warning">
//            <button className="btn btn-danger mr-1">Recibir Pedido</button>
//             <th scope="colum"> Cantidad</th>
//             <th scope="colum">Pedido</th>
//             <th scope="colum">Status</th>
//             <th scope="colum">Fecha</th>
//            </tr>
//          </thead>
//          <thead>
//           <tr>
//             <th scope="col">Nombre</th>
//              {/* <p> Cliente: {orders.Cliente} </p> */}
//          </tr>
//          </thead>

//          <tbody>
           
//          {pedidos.map(element => {
//                             //  console.log('elemente',element.data());
//                             //  console.log('detalles',element.data().Order);
//                             // let detailsOrder =  element.data().Order;
//                             return (
//                                 <tbody>
//                                     {element.data()?.Pedido?.map(item => {
//                                         return (
//                                             <table className="table table-dark">
//                                                 <tbody>
//                                                     <td>
//                                                         <td> {item.cant}</td>
//                                                         <td> {item.name}</td>
//                                                     </td>

//                                                 </tbody>
//                                             </table>
//                                         );
//                                     })}
//                                     <td> {element.data().addDetalls}</td>
//                                     <td> {element.data().nameWaiter}</td>
//                                     <td>{element.data().numTable}</td>
//                                     <td> {element.data().numTable}</td>
//                                     <td> {element.data().status}</td>
//                                     <td> <button className='btn-warning btn-large'>Listo</button></td>
//                                 </tbody>
//                             )
//                         })}
           
//            </tbody>
//       </table>
//        </aside>
//   </div>
//   );
// }
// export default Kitchen