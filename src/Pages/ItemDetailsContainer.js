import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { getFirestore, getDocs, collection } from '../../node_modules/firebase/firestore';

const ItemDetailsContainer = () => {
    const {id} = useParams();
    const [detailObject, setDetailObject] = useState({});

    // const getProduct = new Promise((resolve, reject) => {
    //     setTimeout (() => {
    //         const findProduct = product.find((item) => item.id === id);
    //         if (findProduct) {
    //             resolve(findProduct);
    //         } else {
    //             reject('Producto no encontrado');
    //         }
    //     }, 1000);
    // });

    const getProduct = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, "items");

        getDocs(querySnapshot)
            .then((response) => {
                const list = response.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });
                console.log(list);
            })
            .catch((error) => console.log(error));
        };

        useEffect (() => {
            getProduct
                .then((response) => {
                    setDetailObject(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }, []);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
}

export default ItemDetailsContainer