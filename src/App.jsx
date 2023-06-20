import Header from "./Components/Layout/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Shop/Products";
import Contact from "./Components/Shop/Contact";
import ShoppingCart from "./Components/Shop/ShoppingCart";
import Homepage from "./Components/Shop/Homepage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
