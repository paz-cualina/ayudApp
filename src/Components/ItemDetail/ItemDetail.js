import ItemCount from "./ItemCount/ItemCount";
import catPlaceholder from "../../assets/img/catPlaceholder.png";

const ItemDetail = ({detail}) => {
  return (
    <div className="itemDetail">
      <figure>
        <img src={catPlaceholder} alt={detail.name} />
      </figure>
      <div className='textWrapper'>
            <div className="titleWrapper">
                <h3>¡Ayuda para {detail.category}!</h3> 
                <span>Faltan: $5500</span>
            </div>
            <p>Costo {detail.category}:<span>${detail.cost}</span></p>
            <p>Donaciones recibidas:<span>$0</span></p>
            <p>Fecha:<span>{detail.date}</span></p>
            <p>Estado:<span>{detail.state}</span></p>
            <p>Causa:<span>{detail.description}</span></p>
            <h4>Quiero donar:</h4>
            <ItemCount />
            <button className='addCart'>Agregar a carrito solidario</button>
      </div>
    </div>
  )
}

export default ItemDetail