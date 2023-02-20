import catPlaceholder from "../../assets/img/catPlaceholder.png";

const Item = ({product}) => {
  return (
    <div className="cardItem">
      <figure>
        <img src={catPlaceholder} alt={product.name} />
      </figure>
      <div className='textWrapper'>
          <h3>¡Ayuda para {product.category}!</h3>
          <p>Costo {product.category}:<span>${product.cost}</span></p>
          <p>Donaciones recibidas:<span>${}</span></p>
          <p>Fecha:<span>{product.date}</span></p>
          <p>Estado:<span>{product.state}</span></p>
          <p>Causa:<span>{product.description}</span></p>
          <a href='#'>¡Quiero ayudar!</a>
      </div>
    </div>
  )
}

export default Item