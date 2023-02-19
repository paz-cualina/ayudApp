// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ItemDetailsContainer = () => {
//     const { id } = useParams();
//     const getProduct = new Promise((res, rej)) => {
//         setTimeout (() => {
//             const findProduct = products.find ( item => item.id === id );
//             res (findProduct);
//         }, 1000);
//     });

//     useEffect (()) => {
//         getProduct
//             .then((response) => {
//                 console.log(response)
//             } );
//             .catch((error) => {
//                 console.log(error)
//             } );
//     }, []);

    
//   return (
//     <div><ItemDetail detail={Object}></ItemDetail></div>
//   )
// }

// export default ItemDetailsContainer