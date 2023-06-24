/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import tapestry from "../../Assets/tapestry.jpg";
import ItemCount from "../UI/ItemCount";

const CartItem = ({ productName, productCount, productPrice }) => {
  const [count, setCount] = useState(productCount);
  const [price, setPrice] = useState(productPrice * productCount);
  const itemRef = useRef();

  const addItemHandler = () => {
    setCount((prev) => prev + 1);
    setPrice((prev) => prev + productPrice);
  };

  const removeItemHandler = () => {
    if (count === 1) {
      itemRef.current.remove();
    }
    setCount((prev) => prev - 1);
    setPrice((prev) => prev - productPrice);
  };

  return (
    <div ref={itemRef} className="flex gap-10 items-center my-5">
      <img src={tapestry} alt="img" className="h-[120px]" />
      <span className="flex flex-col gap-2">
        <h2 className="font-montserrat font-semibold text-lg">{productName}</h2>
        <p>{`$${price}`}</p>
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
