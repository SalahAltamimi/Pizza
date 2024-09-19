// Test ID: IIDSAT
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect, useNavigation } from "react-router-dom";
import { apiCreateOrder } from "../../services/apiMenu.js";
import { funCurrency } from "../../utils/helpers.js";
import { store } from "../../store.js";
import { clearCart } from "../cart/cartSlice.js";
import CartEmpyt from "../cart/CartEmpyt.jsx";
import { getLocation } from "../user/userSlice.js";
function CreateOrder() {
  const { cart } = useSelector((store) => store.cartSlice);
  const { user, address, loader, error } = useSelector(
    (store) => store.userSlice
  );
  const [priority, setpriority] = useState(false);
  const totalPrice = cart.reduce((a, b) => a + b.totalPrice, 0);
  const totalPrices = priority ? totalPrice * 1.2 : totalPrice;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = navigation.state === "loading";
  if (!cart.length) return <CartEmpyt />;
  return (
    <Form method="POST" className="py-16 px-6 flex flex-col">
      {error && (
        <p className="text-center text-red-600 capitalize tracking-wider">
          {error}
        </p>
      )}
      <h1 className="font-semibold mb-8 text-base">
        Ready to order? Let's go!
      </h1>
      <label htmlFor="customer" className="text-base font-semibold mb-1">
        First Name
      </label>
      <input
        type="text"
        name="customer"
        id="customer"
        className="px-2 py-2 rounded-full mb-4 outline-none duration-300 transition-all focus:ring focus:ring-yellow-400"
        defaultValue={user}
        required
      />
      <label htmlFor="phone" className="text-base font-semibold mb-1">
        Phone number
      </label>
      <input
        type="text"
        name="phone"
        id="phone"
        className="px-2 py-2 rounded-full mb-4 outline-none duration-300 transition-all focus:ring focus:ring-yellow-400"
        required
      />
      <div className="flex flex-col relative">
        <label htmlFor="address" className="text-base font-semibold mb-1">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          defaultValue={address}
          className="px-2 py-2 rounded-full mb-4 outline-none duration-300 transition-all focus:ring focus:ring-yellow-400"
          required
        />
        {address.length <= 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(getLocation());
            }}
            className="bg-yellow-400 rounded-full px-4 py-2 font-semibold capitalize mr-4 hover:bg-yellow-300 duration-300 transition-all absolute right-[-15px] top-7"
          >
            {loader ? "Loading" : "Get Position"}
          </button>
        )}
      </div>
      <input type="hidden" name="cart" id="cart" value={JSON.stringify(cart)} />
      <div className="flex items-center space-x-2 mb-8">
        <input
          type="checkbox"
          value={priority}
          name="priority"
          onChange={() => setpriority((s) => !s)}
          className="accent accent-yellow-300 h-6 w-6 focus:ring-yellow-400 focus:ring outline-none"
        />
        <span>Want to yo give your order priority?</span>
      </div>
      <div className="">
        <button className="bg-yellow-400 rounded-full px-4 py-3 font-semibold capitalize mr-4 hover:bg-yellow-300 duration-300 transition-all">
          {loading
            ? "Loading..."
            : `Order now ${funCurrency(Math.round(totalPrices))}`}
        </button>
      </div>
    </Form>
  );
}
export default CreateOrder;

export async function action({ request }) {
  const formData = await request.formData();
  const data1 = Object.fromEntries(formData);
  const newOrder = {
    ...data1,
    cart: JSON.parse(data1.cart),
    priority: data1.priority === "true",
  };
  const { data: order } = await apiCreateOrder(newOrder);
  if (order.id) store.dispatch(clearCart());
  return redirect(`/order/${order.id}`);
}
