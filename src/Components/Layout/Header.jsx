import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";

const Header = () => {
  const { shoppingCart } = useContext(CartContext);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(
      Object.keys(shoppingCart).reduce(
        (total, current) => total + shoppingCart[current].productCount,
        0
      )
    );
  }, [shoppingCart]);

  return (
    <div className="flex min-w-[650px] shrink-0 items-center gap-5 bg-secondary px-3 py-5">
      <Link
        to="/"
        className="ml-5 mr-auto font-barlow text-4xl font-bold text-primary"
      >
        Hasbulla Store
      </Link>
      <Link to="/" className="font-montserrat hover:text-primary">
        Homepage
      </Link>
      <Link to="products" className="font-montserrat hover:text-primary">
        Products
      </Link>
      <Link to="cart" className="font-montserrat hover:text-primary">
        Cart
        {totalCount !== 0 && `(${totalCount})`}
      </Link>
      <Link to="contact" className="mr-5 font-montserrat hover:text-primary">
        Contact Us
      </Link>
    </div>
  );
};

export default Header;
