import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex shrink-0 gap-5 items-center px-3 py-5 bg-secondary min-w-[650px]">
      <h1 className="text-4xl text-primary font-bold font-barlow mr-auto ml-5">Hasbulla Store</h1>
      <Link to="/" className="font-montserrat hover:text-primary">Homepage</Link>
      <Link to="products" className="font-montserrat hover:text-primary">Products</Link>
      <Link to="cart" className="font-montserrat hover:text-primary">Cart</Link>
      <Link to="contact" className="font-montserrat mr-5 hover:text-primary">Contact Us</Link>
    </div>
  );
};

export default Header;
