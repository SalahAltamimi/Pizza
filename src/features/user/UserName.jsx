import { useSelector } from "react-redux";

function UserName() {
  const { user } = useSelector((store) => store.userSlice);
  return (
    <h3 className="uppercase text-sm font-semibold tracking-widest">{user}</h3>
  );
}

export default UserName;
