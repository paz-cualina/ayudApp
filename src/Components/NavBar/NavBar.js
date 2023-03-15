import CartWidget from '../CartWidget/CartWidget.js';
import logoAyudapp from '../../assets/img/logoAyudapp.png';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navBar">
            <ul>
                <li><Link to='/'><img src={logoAyudapp} className="logo" /></Link></li>
                <li> <NavLink to='/category/cirugias' className={({isActive}) => isActive ? 'active' : 'inactive'}>Cirugías</NavLink></li>
                <li><NavLink to='/category/tratamientos' className={({isActive}) => isActive ? 'active' : 'inactive'}>Tratamientos</NavLink></li>
                <li><NavLink to='/category/alimentacion' className={({isActive}) => isActive ? 'active' : 'inactive'}>Alimentación</NavLink></li>
                <li><CartWidget /></li>
            </ul>
            <div className="backgroundHero"></div>  
        </div>
    )
}