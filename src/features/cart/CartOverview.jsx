import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { funCurrency } from "../../utils/helpers";

function CartOverview() {
  const { cart } = useSelector((store) => store.cartSlice);
  const totalPrice = cart.reduce((a, b) => a + b.totalPrice, 0);
  const quantity = cart.reduce((a, b) => a + b.quantity, 0);
  if (cart.length > 0)
    return (
      <div className="bg-slate-900 px-4 py-4 flex items-center justify-between">
        <p className="text-slate-100 space-x-4 text-sm">
          <span>{quantity} pizzas</span>
          <span>{funCurrency(totalPrice)}</span>
        </p>
        <Link className="text-slate-100 text-base" to="/cart">
          Open cart →
        </Link>
      </div>
    );
}

export default CartOverview;
