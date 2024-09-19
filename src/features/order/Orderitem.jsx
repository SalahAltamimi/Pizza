import { funCurrency } from "../../utils/helpers";

function Orderitem({ cart, loading, ingredients }) {
  return (
    <li key={cart.pizzaId} className="py-4 px-2">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold tracking-wider">
          {cart.quantity}x {cart.name}
        </span>
        <span className="font-semibold tracking-wider">
          {funCurrency(cart.totalPrice)}
        </span>
      </div>
      {loading && (
        <p className="capitalize text-base  text-stone-400 italic tracking-wide">
          Loading...
        </p>
      )}
      <span className="capitalize text-base  text-stone-400 italic tracking-wide">
        {ingredients}
      </span>
    </li>
  );
}

export default Orderitem;
