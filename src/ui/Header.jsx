import { Link, useNavigate } from "react-router-dom";
import UserName from "../features/user/UserName";
import { useState } from "react";

function Header() {
  const [query, setquery] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    console.log(query);
    navigate(`order/${query}`);
  };

  return (
    <header className="bg-yellow-500 flex items-center justify-between h-[10vh] px-4 shadow-lg">
      <Link to="/" className="text-base font-semibold tracking-widest">
        FAST REACT PIZZA CO.
      </Link>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="#order"
          className="w-1/2 rounded-full px-2 py-1 bg-yellow-200 placeholder:text-slate-500 focus:w-full transition-all duration-75 focus:outline-none focus:ring focus:ring-yellow-300"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
      </form>
      <UserName />
    </header>
  );
}

export default Header;
