import "./App.css"
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from "./context/CartContext";
import Cart from "./components/Cart/cart";
import Form from "./components/Form/Form";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenido a nuestra pagina!" />
              }
            />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/Form"
              element={<Form />}
            />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
