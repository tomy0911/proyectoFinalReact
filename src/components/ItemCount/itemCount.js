import "./itemCount.css";

import React, {useState, useEffect} from "react";

const ItemCount = ({inital, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(inital));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(inital));
    }, [inital])
  return (
    <div className="counter">
      <button className="sumar" disabled={count <= 1} onClick={decrease}>-</button>
      <span>{count}</span>
      <button className="restar" disabled={count >= stock} onClick={increase}>+</button>
      <div>
        <button className="agregar" disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
