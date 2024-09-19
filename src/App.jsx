import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayouts from "./ui/AppLayouts";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Order, { action } from "./features/order/order";
import OrderNew, { loader as loadOrder } from "./features/order/OrderNew";
import { action as actionOrder } from "./features/order/UpdateOrder";
import Menu, { loader as Menuloader } from "./features/menu/Menu";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "menu",
        element: <Menu />,
        loader: Menuloader,
      },
      {
        path: "order/new",
        element: <Order />,
        action,
      },
      {
        path: "order/:id",
        element: <OrderNew />,
        loader: loadOrder,
        action: actionOrder,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
