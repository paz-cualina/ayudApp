import ItemCount from "./ItemCount/ItemCount";
import catPlaceholder from "../../assets/img/catPlaceholder.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({detail}) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const [thirdCounter, setThirdCounter] = useState(0);


  const getCounter = (index) => {
    if (index === 0) {
        return firstCounter;
    } else if (index === 1) {
        return secondCounter;
    } else if (index === 2) {
        return thirdCounter;
    }
  };

  const getAllCounters = () => {
    return firstCounter + secondCounter + thirdCounter;
  }

  const getSetCounter = (index) => {
    if (index === 0) {
        return setFirstCounter;
    } else if (index === 1) {
        return setSecondCounter;
    } else if (index === 2) {
        return setThirdCounter;
    }
  };

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
            <p>Nombre:<span>{detail.name}</span></p>
            <p>Costo {detail.category}:<span>${detail.cost}</span></p>
            <p>Donaciones recibidas:<span>$0</span></p>
            <p>Fecha:<span>{detail.date}</span></p>
            <p>Estado:<span className="active">{detail.state}</span></p>
            <p>Causa:<span>{detail.description}</span></p>
            <h4>Quiero donar:</h4>
            <ItemCount getCounter={getCounter} getSetCounter={getSetCounter} />
            <div className="btnWrapper">
              <button onClick={() => navigate('/')} >Seguir donando</button>
              <button onClick={() => addItem(detail, getAllCounters())}>Agregar a carrito solidario</button>
              <button onClick={() => navigate('/cart')} className='btnDark' >Completar mi donación</button>
            </div>
      </div>
    </div>
  );
};

export default ItemDetail;