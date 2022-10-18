import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/itemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
    
    if (categoriaId) {
      const queryFilter = query(queryCollection, where("category", "==", categoriaId))
      getDocs(queryFilter)
      .then(res => setData (res.docs.map(product => ({id: product.id, ...product.data()}))))
    } else {
      getDocs(queryCollection)
      .then(res => setData (res.docs.map(product => ({id: product.id, ...product.data()}))))
    }
  }, [categoriaId]);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };
  return (
    <div>
      <h1 className="titulo">{greeting}</h1>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
