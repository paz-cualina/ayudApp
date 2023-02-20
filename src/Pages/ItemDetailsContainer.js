import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../data/products";
import ItemDetail from "../Components/ItemDetail/ItemDetail";

const ItemDetailsContainer = () => {
    const { id } = useParams();
    const [detailObject, setDetailObject] = useState({});
    const getProduct = new Promise((resolve, reject) => {
        setTimeout (() => {
            const findProduct = product.find((item) => item.id === id);
            if (findProduct) {
                resolve(findProduct);
            } else {
                reject('Producto no encontrado');
            }
        }, 1000);
    });

    useEffect (() => {
        getProduct
            .then((response) => {
                setDetailObject(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
 
  return (
    <div><ItemDetail detail={detailObject}></ItemDetail></div>
  )
}

export default ItemDetailsContainer