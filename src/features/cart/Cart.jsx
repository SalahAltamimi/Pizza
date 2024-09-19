import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import CartEmpyt from "./CartEmpyt";

function Cart() {
  const { cart } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  if (!cart.length) return <CartEmpyt />;

  return (
    <div className="space-y-8 px-6 py-12">
      <Link
        to="/menu"
        className="text-blue-700 text-sm hover:border-b-2 hover:border-blue-600 transition-all duration-300 pb-1"
      >
        ← Back to menu
      </Link>
      <h3 className="text-base capitalize">Your cart, salah</h3>
      <ul className="flex flex-col divide-y divide-slate-300 border-b border-slate-300">
        {cart.map((cart) => (
          <CartItem key={cart.pizzaId} cart={cart} />
        ))}
      </ul>
      <Button to="/order/new">Order pizzas</Button>
      <button
        onClick={() => dispatch(clearCart())}
        className="rounded-full px-4 py-3 font-semibold capitalize mr-4 border-2 border-stone-300 hover:bg-stone-300 duration-300 transition-all"
      >
        Clear cart
      </button>
    </div>
  );
}

export default Cart;
