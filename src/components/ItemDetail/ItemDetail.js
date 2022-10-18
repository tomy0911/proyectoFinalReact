import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/itemCount";
import "./ItemDetail.css";

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };

  return (
    <div className="container">
      <div className="detail">
        <img className="detail_img" src={data.image} alt="" />
        <div className="content">
          <h1 className="title">{data.title}</h1>
          <h2 className="price">${data.price}</h2>
          <h4 className="specs">{data.specs}</h4>
          {goToCart ? (
            <Link className="terminar" to="/Cart">Ir al carrito</Link>
          ) : (
            <ItemCount inital={1} stock={10} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
