/* eslint-disable react/prop-types */
const Product = ({ productImg, productName, productPrice }) => {
  return (
    <div className="flex max-w-fit min-w-[275px] flex-col gap-2 rounded border-[1px] border-solid border-gray-500 bg-secondary p-4 font-montserrat">
      <img src={productImg} alt="product img" className="h-60" />
      <h2 className="text-lg font-semibold">{productName}</h2>
      <p>{`$${productPrice}`}</p>
      <button
        type="button"
        className="rounded bg-primary py-2 font-semibold text-white hover:opacity-75"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
