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
                    <div className="pill">
                        <select>
                            <option>Fecha: Más Reciente primero</option>
                            <option>Fecha: Más Reciente último</option>
                            <option>Objetivo: Próximo a cumplir primero</option>
                            <option>Objetivo: Próximo a cumplir último</option>
                            <option>Costo: Más Caro último</option>
                            <option>Costo: Más Caro primero</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}