import CartContext from "../../context/cart-context";
import Page from "../UI/Page";
import { useContext } from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const ShoppingCart = () => {
  const { shoppingCart } = useContext(CartContext);

  return (
    <Page className="flex flex-col pl-10">
      <ul>
        {Object.keys(shoppingCart).map((product) => {
          if (shoppingCart[product].productCount > 0) {
            return (
              <li key={Math.random()}>
                <CartItem
                  productName={product}
                  productCount={shoppingCart[product].productCount}
                  productPrice={shoppingCart[product].productPrice}
                />
              </li>
            );
          }
        })}
      </ul>
      <Checkout/>
    </Page>
  );
};

export default ShoppingCart;
