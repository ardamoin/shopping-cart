import { useContext, useEffect, useState } from "react";
import CartContext from "../../context/cart-context";

const Checkout = () => {
  const { shoppingCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      Object.keys(shoppingCart).reduce(
        (total, current) =>
          total +
          shoppingCart[current].productPrice *
            shoppingCart[current].productCount,
        0
      ).toFixed(2)
    );
  }, [shoppingCart]);

  return (
    <div>
      <h1 className="text-lg font-bold font-montserrat mt-5">Total: {`$${totalPrice}`}</h1>
      <button className="bg-green-400 px-5 py-2 font-montserrat mt-3 hover:text-white">Checkout</button>
    </div>
  );
};

export default Checkout;
