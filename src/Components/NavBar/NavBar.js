import CartWidget from '../CartWidget/CartWidget.js';
import heart from './../../assets/img/heart.png';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="wrapper">
                {/* <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li><NavLink to="/">Nosotros</NavLink></li>
                    <li className="categories">
                        <NavLink to="/">Colaboraciones</NavLink>
                        <ul>
                            <li>
                                <NavLink 
                                    className={(isActive) => (isActive ? 'active' : 'inactive')}
                                    to='/category/cirugias'>Cirugías
                                </NavLink>
                            </li>
                            <li><NavLink to='category/tratamientos'>Tratamientos</NavLink></li>
                            <li><NavLink to="/category/alimentacion">Alimentación</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <div className="right">
                    <NavLink to="/">
                        <img src={heart} />
                        Lista de espera
                    </NavLink>
                    <CartWidget />
                </div> */}
            </div>
        </div>
    )
}