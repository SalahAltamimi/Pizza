import { useLoaderData } from "react-router-dom";
import { apiMenu } from "../../services/apiMenu";
import PizzaItem from "./PizzaItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="space-y-8 px-6 py-12">
      <ul className="flex flex-col divide-y divide-slate-300">
        {menu.map((pizza) => (
          <PizzaItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;

export async function loader() {
  const { data } = await apiMenu();
  return data;
}
