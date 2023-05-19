import React, { useState } from "react";

const ItemCountComponent = ({ stock, initial, add}) => {
    const [amount, setAmount] = useState(initial);

    const increment = () => {
        if (amount < stock) {
          setAmount(amount + 1);
        }
      };
    
      const decrement = () => {
        if (amount > 1) {
          setAmount(amount - 1);
        }
      };
    

    return (
        <div>
             
             <p className="h6 my-5">
                <span> Cantidad: </span>
                {amount}{" "}
                <div className="btn-group">
                    <button onClick={increment} className="btn btn-outline-secondary btn-sm">
                        +
                    </button>
                    <button
                        disabled={amount === 1}
                        onClick={decrement}
                        className="btn btn-outline-secondary btn-sm"
                    >
                        -
                    </button>
                    <button onClick={()=> add(amount)} className="producto-comprar">Agregar</button>
                </div>
            </p>
        </div>
    );
};

export default ItemCountComponent;


