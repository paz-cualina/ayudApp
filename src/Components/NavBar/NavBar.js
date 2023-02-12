import CartWidget from './CartWidget/CartWidget';
import heart from './../../assets/img/heart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function NavBar() {
    return (
        <div className="navBar">
            <div className="wrapper">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Nosotros</a></li>
                    <li className="categories">
                        <a href="/">Colaboraciones</a>
                        <ul>
                            <li>Cirugías</li>
                            <li>Tratamientos</li>
                            <li>Alimentación</li>
                        </ul>
                    </li>
                </ul>
                <div className="right">
                    <a href="/">
                        <img src={heart} />
                        Lista de espera
                    </a>
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}