/* eslint-disable react/prop-types */
const Product = ({ productImg, productName, productPrice }) => {
  return (
    <div className="flex flex-col gap-2 rounded border-[1px] border-solid border-gray-500 p-4 font-montserrat bg-secondary">
      <img src={productImg} alt="product img" className="h-60" />
      <h2 className="font-semibold text-lg">{productName}</h2>
      <p>{`$${productPrice}`}</p>
      <button type="button" className="bg-primary py-2 rounded font-semibold text-white hover:opacity-75">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
