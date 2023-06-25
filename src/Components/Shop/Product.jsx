/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartContext from "../../context/cart-context";

const Product = ({ productImg, productName, productPrice }) => {
  const ctx = useContext(CartContext);

  const addProductHandler = () => {
    ctx.setShoppingCart((prev) => {
      const newCart = {
        ...prev,
        [productName]: {
          ...prev[productName],
          productCount: prev[productName].productCount + 1,
        },
      };
      console.log(newCart);
      return newCart;
    });
  };

  return (
    <div className="flex min-w-[275px] max-w-fit flex-col gap-2 rounded border-[1px] border-solid border-gray-500 bg-secondary p-4 font-montserrat">
      <img src={productImg} alt="product img" className="h-60" />
      <h2 className="text-lg font-semibold">{productName}</h2>
      <p className="font-normal">{`$${productPrice}`}</p>
      <button
        type="button"
        className="rounded bg-primary py-2 font-semibold text-white hover:opacity-75"
        onClick={addProductHandler}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
