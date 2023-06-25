/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import HasbullaTapestry from "../../Assets/tapestry.jpg";
import HasbullaMug from "../../Assets/mug.jpg";
import HasbullaPillow from "../../Assets/pillow.jpg";
import HasbullaCutout from "../../Assets/cutout.jpg";
import ItemCount from "../UI/ItemCount";

const CartItem = ({ productName, productCount, productPrice }) => {
  const [count, setCount] = useState(productCount);
  const [price, setPrice] = useState(productPrice * productCount);
  const itemRef = useRef();

  const itemImages = {
    "Hasbulla Tapestry": HasbullaTapestry,
    "Hasbulla Pillow": HasbullaPillow,
    "Hasbulla Mug": HasbullaMug,
    "Hasbulla Cutout": HasbullaCutout
  }

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
      <img src={itemImages[productName]} alt="img" className="h-[120px] w-[120px]" />
      <span className="flex flex-col gap-2">
        <h2 className="font-montserrat font-semibold text-lg">{productName}</h2>
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
