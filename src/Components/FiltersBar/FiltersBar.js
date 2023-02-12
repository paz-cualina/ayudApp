import chevronDown from './../../assets/img/chevronDown.png';

export default function FiltersBar() {
    return (
        <div className="filtersBar">
            <div className="wrapper">
                <ul>
                    <li>Cirugías</li>
                    <li>Tratamientos</li>
                    <li>Alimentación</li>
                </ul>
                <div className="sortBy">
                    <span>Ordenar por:</span>
                    <div className="pill withSelect">
                        <select>
                            <option>Más Reciente primero</option>
                            <option>Más Reciente último</option>
                            <option>Próximo a cumplir primero</option>
                            <option>Próximo a cumplir último</option>
                            <option>Más Caro último</option>
                            <option>Más Caro primero</option>
                        </select>
                        <img src={chevronDown} />
                    </div>
                </div>
            </div>
        </div>
    )
}