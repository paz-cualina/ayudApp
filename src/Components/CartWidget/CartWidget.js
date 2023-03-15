import shoppingCart from './../../assets/img/shoppingCart.png';
import { CartContext } from '../../context/CartContext.js';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState([0]);

  useEffect(() => {
    setTotal(cart.reduce((prev, current) => prev + current.quantity.first + current.quantity.second + current.quantity.third, 0))
  }, [cart]);

  return (
    <Link to={'/cart'}>
      <div className="cartWidget">
          <img src={shoppingCart} />
          <p>Carrito Solidario</p>
          <span className="notification">{total}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
