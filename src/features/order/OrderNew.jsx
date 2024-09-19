import { useFetcher, useLoaderData } from "react-router-dom";
import { apigetOrder } from "../../services/apiMenu";
import { useEffect } from "react";
import Orderitem from "./Orderitem";
import UpdateOrder from "./UpdateOrder";
import { calcMintes, formatDate, funCurrency } from "../../utils/helpers";

function OrderNew() {
  const { cart, estimatedDelivery, id, orderPrice, priority, priorityPrice } =
    useLoaderData();
  const featcher = useFetcher();
  useEffect(
    function () {
      if (!featcher.data && featcher.state === "idle") featcher.load("/menu");
    },
    [featcher]
  );
  const estimated = calcMintes(estimatedDelivery);

  return (
    <div className="space-y-8 px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-semibold tracking-widest">
          Order {id} Status
        </h1>
        <div className="space-x-4">
          {!priority && (
            <span className="bg-red-600 text-slate-100 px-4 py-1 rounded-full uppercase text-base font-semibold tracking-wider">
              Priority
            </span>
          )}
          <span className="bg-green-600 text-slate-100 px-4 py-1 rounded-full uppercase text-base font-semibold tracking-wider">
            preparing order
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-stone-300 px-4 py-6">
        <h3 className="text-sm font-semibold">
          {estimated > 0
            ? `Only ${calcMintes(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </h3>
        <p className="text-sm">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="flex flex-col divide-y divide-slate-300 border-b border-t border-slate-300">
        {cart.map((cart) => (
          <Orderitem
            cart={cart}
            loading={featcher.state === "loading"}
            ingredients={featcher.data
              ?.find((el) => el.id === cart.pizzaId)
              .ingredients.join(", ")}
            key={cart.pizzaId}
          />
        ))}
      </ul>
      <div className="flex flex-col bg-stone-300 px-4 py-6 space-y-2">
        <span className="text-sm font-semibold capitalize">
          Price pizza: {funCurrency(orderPrice)}
        </span>
        <span className="text-sm font-semibold capitalize">
          Price priority: {funCurrency(priorityPrice)}
        </span>
        <span className="text-sm font-semibold capitalize">
          To pay on delivery: {funCurrency(orderPrice + priorityPrice)}
        </span>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

export default OrderNew;

export async function loader({ params }) {
  const { id } = params;
  const { data } = await apigetOrder(id);
  return data.data;
}
