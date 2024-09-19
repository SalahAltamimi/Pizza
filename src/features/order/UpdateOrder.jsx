import { useFetcher } from "react-router-dom";
import { apiupdateOrder } from "../../services/apiMenu";
import Button from "../../ui/Button";

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <Button>Update Order</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  const { id } = params;
  console.log(id);
  const res = await apiupdateOrder(id, data);
  return null;
}
