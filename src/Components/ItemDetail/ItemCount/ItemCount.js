import { useState, useEffect } from 'react';

const ItemCount = () => {

    let donations=['$100','$200','$300'];
    const limit = 9;
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);
    const [thirdCounter, setThirdCounter] = useState(0);

    const addItem = (index) => {
        if (index === 0) {
            setCounter(firstCounter, setFirstCounter);                
        } else if (index === 1) {
            setCounter(secondCounter, setSecondCounter);
        } else if (index === 2) {
            setCounter(thirdCounter, setThirdCounter);
        }
    };

    const setCounter = (counter, setter) => {
        if (counter <= limit) {
            setter(counter + 1);
        }
    }

    const substractItem = (index) => {
        if (index === 0) {
            substractCounter(firstCounter, setFirstCounter);                
        } else if (index === 1) {
            substractCounter(secondCounter, setSecondCounter);
        } else if (index === 2) {
            substractCounter(thirdCounter, setThirdCounter);
        }
    };

    const substractCounter = (counter, setter) => {
        if (counter > 0) {
            setter(counter - 1);
        }
    }

    const getCounter = (index) => {
        if (index === 0) {
            return firstCounter;                
        } else if (index === 1) {
            return secondCounter;
        } else if (index === 2) {
            return thirdCounter;
        }

    }
    
    useEffect(() => {
        if (firstCounter > 9) {
            alert('No se pueden agregar más de diez donaciones a la vez');
        }
    } , [firstCounter]);


  return (
    
    <div className='wrapperItemCount'>
        <ul className='wrapperCounter'>
            {donations.map((value, index) => 
                <li key={index}>
                    <span>{value}</span>
                    <div className='btnWrapper'>
                        <button onClick={() => substractItem(index)}>-</button>
                        <p>{getCounter(index)}</p>
                        <button onClick={() => addItem(index)}>+</button>
                    </div>
                </li>
            )}
        </ul>
    </div> 
  );

};

export default ItemCount