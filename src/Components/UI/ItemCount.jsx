/* eslint-disable react/prop-types */
const ItemCount = ({value: count, onAdd: addItemHandler, onRemove: removeItemHandler}) => {
  return (
    <div className="flex gap-5 bg-transparent items-center max-w-fit">
        <span className="cursor-pointer bg-blue-400 text-white px-2 text-3xl" onClick={removeItemHandler}>-</span>
        <p className="text-gray-800">{count}</p>
        <span className="cursor-pointer bg-blue-400 text-white px-2 text-3xl" onClick={addItemHandler}>+</span>
    </div>
  )
}

export default ItemCount