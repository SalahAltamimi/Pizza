import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return <div className="mt-8 ml-8">{error.data || error.message}</div>;
}

export default Error;
