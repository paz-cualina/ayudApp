import catPlaceholder from "../../assets/img/catPlaceholder.png";
import { useContext } from "react";
import { CartContext, sumQuantity } from "../../context/CartContext";


const Item = ({product}) => {
  const {cart} = useContext(CartContext);

  return (
    <div className="cardItem">
      <figure>
        <img src={catPlaceholder} alt={product.name} />
      </figure>
      <div className='textWrapper'>
          <h3>¡Ayuda para {product.category}!</h3>
          <p>Nombre:<span>{product.name}</span></p>
          <p>Costo {product.category}:<span>${product.cost}</span></p>
          <p>Donaciones recibidas:<span>${ cart.reduce((acc, curr) => acc + sumQuantity(curr.quantity), 0) }</span></p>
          <p>Faltan:<span>$ { product.cost - cart.reduce((acc, curr) => acc + sumQuantity(curr.quantity), 0) }</span></p>
          <p>Fecha:<span>{product.date}</span></p>
          <p>Estado:<span>{product.state}</span></p>
          <p>Causa:<span>{product.description}</span></p>
          <p className="action">¡Quiero ayudar!</p>
      </div>
    </div>
  )
}

export default Item