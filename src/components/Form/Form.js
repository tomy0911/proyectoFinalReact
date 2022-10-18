import React, { useState, useEffect, useContext } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { db } from "../../firebase";
import swal from "sweetalert";
import "./Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { cart, totalPrice, clearCart } = useCartContext();
  const [showId, setShowId] = useState("");

  const order = {
    buyer: {
      name: name,
      email: email,
      message: message,
    },
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const ordersCollection = await collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => setShowId(id));
    setName("");
    setEmail("");
    setMessage("");
    clearCart();
  };

  const mostrarAlerta = () => {
    swal({
      title: "Felicidades!",
      text: "Tu orden fue generada correctamente. En el inferior de la pagina vas a encontrar tu id correspondiente, gracias!",
      icon: "success",
      button: "Aceptar",
      timer: 3000,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Confirmá tus datos para realizar la compra</h1>

      <label>Nombre y Apellido</label>
      <input
        placeholder="Nombre y apellido..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>Email</label>
      <input
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Mensaje</label>
      <textarea
        placeholder="Aca podes poner aclaraciones, recomendaciones, etc..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        onClick={() => mostrarAlerta()}
        type="submit"
        style={{ background:"rgb(2, 2, 110)" }}
      >
        Confirmar
      </button>

      <div className="showid">
        <p>Tu ID generado es: &nbsp;</p>{showId && <p>{showId}</p>}
      </div>
    </form>
  );
};

export default Form;
