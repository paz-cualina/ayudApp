import { NavLink } from 'react-router-dom';
import chevronDown from './../../assets/img/chevronDown.png';

export default function FiltersBar() {
    return (
        <div className="filtersBar">
            <div className="wrapper">
                <ul>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to="/">Todos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to='/category/cirugias'>Cirugías
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to='/category/tratamientos'>Tratamientos
                        </NavLink>
                        </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to="/category/alimentacion">Alimentación
                        </NavLink>
                    </li>
                </ul>
                <div className="sortBy">
                    <span>Ordenar por:</span>
                    <div className="pill withSelect">
                        <select>
                            <option>Próximo a cumplir primero</option>
                            <option>Próximo a cumplir último</option>
                            <option>Más Reciente primero</option>
                            <option>Más Reciente último</option>
                            <option>Activo</option>
                            <option>Terminado</option>
                        </select>
                        <img src={chevronDown} />
                    </div>
                </div>
            </div>
        </div>
    )
}