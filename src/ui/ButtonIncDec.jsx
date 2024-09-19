import Button from "./Button";

function ButtonIncDec({ currentQuantity, inc, dec, deleteItem }) {
  return (
    <div className="space-x-3 flex items-center">
      <button
        onClick={inc}
        className="px-[.40rem] py-[0.01rem] bg-yellow-400 rounded-full text-base font-semibold shadow-sm"
      >
        +
      </button>
      <span>{currentQuantity}</span>
      <button
        onClick={dec}
        className="px-[0.50rem] py-[0.01rem] bg-yellow-400 rounded-full text-base font-semibold"
      >
        -
      </button>
      <button
        onClick={deleteItem}
        className="px-4 py-1 bg-yellow-400 rounded-full text-base font-semibold"
      >
        Delete
      </button>
    </div>
  );
}

export default ButtonIncDec;
