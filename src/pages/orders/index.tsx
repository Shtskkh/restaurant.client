import { useNavigate } from "@tanstack/react-router";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import ErrorComponent from "../../components/errorComponent.tsx";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { useOrders } from "../../utils/apiHooks.ts";
import { ordersColumns } from "../../utils/columns.ts";

const OrdersIndex = () => {
  const { data, error, isLoading } = useOrders();
  const navigate = useNavigate();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  const handleClick = (gridParams: GridRowParams): void => {
    const id: string = gridParams.row.idOrder;
    navigate({ to: "/orders/$id", params: { id } }).then();
  };

  return (
    <DataGrid
      columns={ordersColumns}
      rows={data}
      getRowId={(row) => row.idOrder}
      disableColumnMenu={true}
      onRowDoubleClick={handleClick}
      hideFooter={true}
    />
  );
};

export default OrdersIndex;
