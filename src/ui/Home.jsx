import { useSelector } from "react-redux";
import Creatuser from "../features/user/Creatuser";
import Button from "./Button";

function Home() {
  const { user } = useSelector((store) => store.userSlice);

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-semibold text-center mt-16 capitalize">
        The best pizza.
        <br />
        <span className="text-3xl text-yellow-400">
          Straight out of the oven,straight to you.
        </span>
      </h1>
      <p className="text-base">
        👋 Welcome! Please start by telling us your name:
      </p>
      {user ? (
        <Button to={"/menu"}>CONTINUE ORDERING {user.toUpperCase()}</Button>
      ) : (
        <Creatuser />
      )}
    </div>
  );
}
export default Home;
