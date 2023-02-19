import { product } from '../data/products';
import { useEffect, useState } from 'react';
import ItemList from '../Components/ItemList/ItemList';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]); //vacio porque lo rellena ejecucion de useEffect
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(product)
        }, 3000)
    });

    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response)
        })
        .catch((error) => {console.log(error)})
    }, [])

  return (
    <ItemList productList={productList} />
  )
}

export default ItemListContainer