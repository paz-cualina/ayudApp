import { useEffect } from "react";

const ItemCount = ({getCounter, getSetCounter}) => {

    let donations = ['$100','$200','$300'];
    const limit = 9;
 
    const onAdd = (index) => {
        setCounter(getCounter(index), getSetCounter(index));
    };

    const setCounter = (counter, setter) => {
        if (counter <= limit) {
            setter(counter + 1);
        }
    }

    const substractItem = (index) => {
        substractCounter(getCounter(index), getSetCounter(index));
    };

    const substractCounter = (counter, setter) => {
        if (counter > 0) {
            setter(counter - 1);
        }
    }
    
    const showMessage = () => {
        alert('No se pueden agregar más de diez donaciones a la vez de un mismo monto');
    }

    useEffect(() => {
        if (getCounter(0) > 9) {
            showMessage();
        }
    }, [getCounter(0)]);

    useEffect(() => {
        if (getCounter(1) > 9) {
            showMessage();
        }
    }, [getCounter(1)]);

    useEffect(() => {
        if (getCounter(2) > 9) {
            showMessage();
        }
    }, [getCounter(2)]);


  return (
    
    <div className='wrapperItemCount'>
        <ul className='wrapperCounter'>
            {donations.map((value, index) => 
                <li key={index}>
                    <span>{value}</span>
                    <div className='btnWrapper'>
                        <button onClick={() => substractItem(index)}>-</button>
                        <p>{getCounter(index)}</p>
                        <button onClick={() => onAdd(index)}>+</button>
                    </div>
                </li>
            )}
        </ul>
    </div> 
  );

};

export default ItemCount