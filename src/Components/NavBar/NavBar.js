import CartWidget from '../CartWidget/CartWidget.js';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navBar">
            <ul>
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