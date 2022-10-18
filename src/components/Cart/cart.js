import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
  };

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>Total: ${totalPrice()}</p>
      <button className="confirmar" onClick={handleClick}>
        {" "}
        <Link className="confirmar" to="/Form">
          Confirmar compra
        </Link>
      </button>
    </>
  );
};

export default Cart;
