import Item from '../Item/Item.js';

const ItemList = ({productList}) => {
  console.log('ItemList > productList', productList);
  return (
    <>
    {
      productList.map((product) => (
          <Item key={product.id} product={product} />
      ))
    }
    </>
  );
};

export default ItemList