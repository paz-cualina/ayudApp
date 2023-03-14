import CartWidget from '../CartWidget/CartWidget.js';
import { NavLink, Link } from 'react-router-dom';
import logoAyudapp from '../../assets/img/logoAyudapp.png';

export default function NavBar() {
    return (
        <div className="navBar">
            <Link to='/'>
                <img src={logoAyudapp} className="logo" />
            </Link>
            <ul>
                <li><NavLink to="/">Nosotros</NavLink></li>
                <li className="categories">
                    <NavLink to="/">Colaboraciones</NavLink>
                    <ul>
                        <li> <NavLink to='/category/cirugias'>Cirugías</NavLink></li>
                        <li><NavLink to='/category/tratamientos'>Tratamientos</NavLink></li>
                        <li><NavLink to="/category/alimentacion">Alimentación</NavLink></li>
                    </ul>
                </li>
                <li><CartWidget /></li>
            </ul>
        </div>
    )
}