import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  AddToCart,
  decreasItem,
  DeleteItem,
  increasItem,
} from "../cart/cartSlice";
import ButtonIncDec from "../../ui/ButtonIncDec";
import { funCurrency } from "../../utils/helpers";

function PizzaItem({ pizza }) {
  const { id, imageUrl, name, ingredients, unitPrice } = pizza;
  const { cart } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();
  const handelAddCart = () => {
    const newItem = {
      pizzaId: id,
      imageUrl,
      name,
      ingredients,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(AddToCart(newItem));
  };

  const currentQuantity = cart.find((el) => el.pizzaId === id)?.quantity;
  return (
    <li className="flex items-end justify-between py-4">
      <div className="flex items-center space-x-4">
        <img
          src={pizza.imageUrl}
          alt={pizza.name}
          className={`h-24 rounded-full ${pizza.soldOut ? "grayscale" : ""}`}
        />
        <div className="flex flex-col space-y-2">
          <h3 className="capitalize text-base font-semibold">{pizza.name}</h3>
          <p className="capitalize text-base  text-stone-400 italic tracking-wide">
            {pizza.ingredients.join(",")}
          </p>
          <span className="text-base">{funCurrency(unitPrice)}</span>
        </div>
      </div>
      {!pizza.soldOut && (
        <>
          {!currentQuantity ? (
            <Button onClick={handelAddCart}>Add Cart</Button>
          ) : (
            <ButtonIncDec
              inc={() => dispatch(increasItem(pizza.id))}
              dec={() => dispatch(decreasItem(pizza.id))}
              deleteItem={() => dispatch(DeleteItem(pizza.id))}
              currentQuantity={currentQuantity}
            />
          )}
        </>
      )}
    </li>
  );
}

export default PizzaItem;
