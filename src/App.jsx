import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Shop/Products";
import Contact from "./Components/Shop/Contact";
import ShoppingCart from "./Components/Shop/ShoppingCart";
import Homepage from "./Components/Shop/Homepage";
import CartContext from "./context/cart-context";
import { useState } from "react";

function App() {
  const [shoppingCart, setShoppingCart] = useState({
    "Hasbulla Cutout": {
      productPrice: 7.55,
      productCount: 0,
    },

    "Hasbulla Tapestry": {
      productPrice: 19.45,
      productCount: 0,
    },

    "Hasbulla Pillow": {
      productPrice: 23.99,
      productCount: 0,
    },

    "Hasbulla Mug": {
      productPrice: 12.45,
      productCount: 0,
    },
  });

  return (
    <CartContext.Provider
      value={{
        shoppingCart: shoppingCart,
        setShoppingCart: setShoppingCart,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
