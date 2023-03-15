import { useContext } from "react";
import { CartContext, sumQuantity, getTotalQuantity } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import catPlaceholder from "../assets/img/catPlaceholder.png";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const Cart = () => {
    const {cart, clear, removeItem} = useContext(CartContext);
    const navigate = useNavigate();

    const createOrder = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const querySnapshot = collection(db, 'orders');

        addDoc(querySnapshot, {
            buyer: {
                email: 'keila@ayudapp.com',
                name: 'Keila Sancristobal',
                phone: '91785697'
            },
            cases: cart.map((product) => ({
                title: product.name,
                cost: product.cost,
                id: product.id,
                quantity: { ...product.quantity }
            })),
            total: cart.reduce((acc, curr) => acc + sumQuantity(curr.quantity), 0)
        })
        .then((response) => {
            console.log(response.id)
            alert(`Orden con el id: ${response.id} ha sido creada`)
        })
        .catch((error) => console.log(error))
    };

    return (
        <div className="cartProduct">
            <h2>Resumen de Donaciones:</h2>
            {cart.map((product) => (
                <div key={product.name} className="singleProduct">
                    <h3>{product.name}</h3>
                    <h5>{getTotalQuantity(product.quantity)} = $ {sumQuantity(product.quantity)}</h5>
                    <figure>
                        <img src={catPlaceholder} alt={product.name} />
                    </figure>
                    <button onClick={() => removeItem(product.id)} className="delete">X</button>
                </div>
            ))}
            total: { cart.reduce((acc, curr) => acc + sumQuantity(curr.quantity), 0) }
            {
                cart.length > 0 && 
                <>
                    <button onClick={clear}>Vaciar Carrito</button>
                    <button onClick={createOrder}>Completar donación</button>
                </>
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