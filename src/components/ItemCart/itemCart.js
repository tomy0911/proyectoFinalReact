import React from 'react'
import "./itemCart.css"
import {useCartContext} from "../../context/CartContext";

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
  return (
    <div className='itemCart'>
        <img src={product.image} alt={product.title}/>
        <div>
            <p>Titulo: {product.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio U.: ${product.price}</p>
            <p>Total: ${product.quantity * product.price}</p>
            <button className='remove' onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart