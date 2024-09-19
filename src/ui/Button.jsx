import { Link } from "react-router-dom";

function Button({ children, to, onClick }) {
  if (to)
    return (
      <Link
        to={to}
        className="bg-yellow-400 rounded-full px-4 py-4 font-semibold capitalize mr-4 hover:bg-yellow-300 duration-300 transition-all"
      >
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 rounded-full px-4 py-2 font-semibold capitalize mr-4 hover:bg-yellow-300 duration-300 transition-all"
    >
      {children}
    </button>
  );
}

export default Button;
