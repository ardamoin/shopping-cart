/* eslint-disable react/prop-types */
import { useRef, useState, useContext } from "react";
import HasbullaTapestry from "../../Assets/tapestry.jpg";
import HasbullaMug from "../../Assets/mug.jpg";
import HasbullaPillow from "../../Assets/pillow.jpg";
import HasbullaCutout from "../../Assets/cutout.jpg";
import ItemCount from "../UI/ItemCount";
import CartContext from "../../context/cart-context";

const CartItem = ({ productName, productCount, productPrice }) => {
  const [count, setCount] = useState(productCount);
  const [price, setPrice] = useState(productPrice * productCount);
  const itemRef = useRef();
  const { setShoppingCart } = useContext(CartContext);

  const itemImages = {
    "Hasbulla Tapestry": HasbullaTapestry,
    "Hasbulla Pillow": HasbullaPillow,
    "Hasbulla Mug": HasbullaMug,
    "Hasbulla Cutout": HasbullaCutout,
  };

  const addItemHandler = () => {
    setCount((prev) => prev + 1);
    setPrice((prev) => prev + productPrice);
    setShoppingCart((prev) => {
      const newCart = {
        ...prev,
        [productName]: {
          ...prev[productName],
          productCount: prev[productName].productCount + 1,
        },
      };
      return newCart;
    });
  };

  const removeItemHandler = () => {
    if (count === 1) {
      itemRef.current.remove();
    }
    setCount((prev) => prev - 1);
    setPrice((prev) => prev - productPrice);
    setShoppingCart((prev) => {
      const newCart = {
        ...prev,
        [productName]: {
          ...prev[productName],
          productCount: prev[productName].productCount - 1,
        },
      };
      console.log(newCart);
      return newCart;
    });
  };

  return (
    <div ref={itemRef} className="my-5 flex items-center gap-10">
      <img
        src={itemImages[productName]}
        alt="img"
        className="h-[120px] w-[120px]"
      />
      <span className="flex flex-col gap-2">
        <h2 className="font-montserrat text-lg font-semibold">{productName}</h2>
        <p>{`$${price.toFixed(2)}`}</p>
        <ItemCount
          value={count}
          onAdd={addItemHandler}
          onRemove={removeItemHandler}
        />
      </span>
    </div>
  );
};

export default CartItem;
