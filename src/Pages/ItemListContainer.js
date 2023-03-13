import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../Components/ItemList/ItemList';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]); //vacio porque lo rellena ejecucion de useEffect
    const {categoryId} = useParams();

    const getProducts = () => {
      const db = getFirestore();
      const querySnapshot = collection(db, 'items');

      getDocs(querySnapshot)
        .then((response) => {
          const list = response.docs.map((doc) => {
            return {
              id: doc.id, 
              ...doc.data()
            };
          });
          setProductList(list);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => { getProducts(); }, [categoryId]);

    return (
        <div className='itemListContainer'>
            <ItemList productList={productList} />
        </div>
    )
}

export default ItemListContainer