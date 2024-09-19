import ButtonIncDec from "../../ui/ButtonIncDec";
import { useDispatch } from "react-redux";
import { decreasItem, DeleteItem, increasItem } from "../cart/cartSlice";
import { funCurrency } from "../../utils/helpers";
function CartItem({ cart }) {
  const dispatch = useDispatch();

  return (
    <li
      key={cart.pizzaId}
      className="py-4 px-2 flex items-center justify-between"
    >
      <span className="font-semibold tracking-wider">
        {cart.quantity}x {cart.name}
      </span>
      <div className="flex items-center space-x-4">
        <ButtonIncDec
          inc={() => dispatch(increasItem(cart.pizzaId))}
          dec={() => dispatch(decreasItem(cart.pizzaId))}
          deleteItem={() => dispatch(DeleteItem(cart.pizzaId))}
          currentQuantity={cart.quantity}
        />
        <span className="font-semibold tracking-wider">
          {funCurrency(cart.totalPrice)}
        </span>
      </div>
    </li>
  );
}

export default CartItem;
