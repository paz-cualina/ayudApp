import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../Components/ItemDetail/ItemDetail";
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailsContainer = () => {
    const {id} = useParams();
    const [detailObject, setDetailObject] = useState({});

    const getProduct = () => {
        const db = getFirestore();
        const querySnapshot = doc(db, "items", id);

        getDoc(querySnapshot)
            .then((response) => {
                setDetailObject({
                    id: response.id, ...response.data()
                })
            })
            .catch((error) => console.log(error));
        };

        useEffect (() => {
            getProduct();
        }, []);

        return (
            <div>
                <ItemDetail detail={detailObject} />
            </div>
        )
}

export default ItemDetailsContainer