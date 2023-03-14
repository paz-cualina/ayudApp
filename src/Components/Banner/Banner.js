import logoAyudapp from '../../assets/img/logoAyudapp.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner'>
        <div className='textWrapper'>
            <h3>¿Qué estás esperando para ser parte del cambio? </h3>
            <p>
                Con AyudApp podés colaborar con el tratamiento, cirugía y/o alimentación de animales sin hogar, en transitorio o 
                esperando ser adoptados de manera muy rápida.
            </p>
        </div>
        <Link to='/'>
            <img src={logoAyudapp} className="logo" />
        </Link>
    </div>
)
}

export default Banner