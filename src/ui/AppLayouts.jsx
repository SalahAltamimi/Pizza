import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayouts() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-stone-200">
      {loading && <Loader />}
      <Header />
      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-[48rem]">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayouts;
