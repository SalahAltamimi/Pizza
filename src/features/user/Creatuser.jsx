import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setUser } from "./userSlice";
function Creatuser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, Setuser] = useState("");
  const handelUser = (e) => {
    e.preventDefault();
    if (!userName) return;
    dispatch(setUser(userName));
    navigate("/menu");
  };
  return (
    <form onSubmit={handelUser}>
      <input
        type="text"
        placeholder="#userName"
        className="rounded-full px-2 py-2  placeholder:text-slate-500 focus:w-full transition-all duration-75 focus:outline-none focus:ring focus:ring-yellow-300"
        value={userName}
        onChange={(e) => Setuser(e.target.value)}
      />
    </form>
  );
}

export default Creatuser;
