import { useContext, useState } from "react";
import { CartContext, sumQuantity, getTotalQuantity } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import catPlaceholder from "../assets/img/catPlaceholder.png";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const Cart = () => {
    const {cart, clear, removeItem} = useContext(CartContext);
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        phone:""
    });
    const navigate = useNavigate();

    const createOrder = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const querySnapshot = collection(db, 'orders');

        addDoc(querySnapshot, {
            buyer: {
                name: formValue.name,
                email: formValue.email,
                phone: formValue.phone
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

    const handleInput = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="donations">
            <div className="wrapper">
                <div className="imgBack"></div>
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
                    <span>Total: $ { cart.reduce((acc, curr) => acc + sumQuantity(curr.quantity), 0) }</span>
                    {
                        cart.length > 0 && 
                        <>
                            <button onClick={clear}>Vaciar Carrito</button>
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
                <form>
                    <input name="name" type="text" placeholder="Nombre" value={formValue.name} onChange={handleInput} />
                    <input name="phone" type="text" placeholder="Teléfono" value={formValue.phone} onChange={handleInput} />
                    <input name="email" type="email" placeholder="Email" value={formValue.email} onChange={handleInput} />
                    <button onClick={createOrder}>Completar donación</button> 
                </form>
            </div>
        </div>
    )
};

export default Cart;