import { Link } from "react-router-dom";

function CartEmpyt() {
  return (
    <div className="space-y-4 px-6 py-12">
      <Link
        to="/menu"
        className="text-blue-700 text-sm hover:border-b-2 hover:border-blue-600 transition-all duration-300 pb-1"
      >
        ← Back to menu
      </Link>
      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default CartEmpyt;
