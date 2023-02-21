import Item from '../Item/Item.js';
import { Link } from 'react-router-dom';

const ItemList = ({productList}) => {
  return (
    <div className='itemList'>
    {
      productList.map((product) => (
        <div key={product.id} className="wrapperCard">
          <Link to={`/item/${product.id}`}>
            <Item product={product} />
          </Link>
        </div>
      ))
    }
    </div>
  );
};

export default ItemList