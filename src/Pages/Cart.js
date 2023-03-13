import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {cart, clear, removeItem} = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <div className="cartProduct">
            <h2>Resumen de Donaciones:</h2>
            {cart.map((product) => (
                <div key={product.name} className="singleProduct">
                    <h3>{product.name}</h3>
                    <h5>{product.quantity}</h5>
                    <button onClick={() => removeItem(product.id)} className="delete">X</button>
                </div>
            ))}
            {
                cart.length > 0 && <button onClick={clear}>Vaciar Carrito</button>
            }
            {
                cart.length === 0 && 
                    <div>
                        <p>No hay nada agregado al carrito todavía</p>
                        <button onClick={() => navigate('/')} >Seguir viendo donaciones</button>
                    </div>
            }
        </div>
    )
};

export default Cart;