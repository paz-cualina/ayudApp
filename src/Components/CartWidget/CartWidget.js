import shoppingCart from './../../assets/img/shoppingCart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartWidget = () => {
  return (
    <div className="cartWidget">
        <a href="/">
            <img src={shoppingCart} />
            Solidario
        </a>
        <span className="notification">2</span>
    </div>
  )
}

export default CartWidget
