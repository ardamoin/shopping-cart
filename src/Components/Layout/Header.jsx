import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Hasbulla Store</h1>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="products">Products</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
