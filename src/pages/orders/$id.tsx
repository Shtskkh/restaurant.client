import { useOrderById } from "../../utils/apiHooks.ts";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import ErrorComponent from "../../components/errorComponent.tsx";
import { List, ListItem, ListItemText } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { dishesInOrderColumns } from "../../utils/columns.ts";

export const OrderId = (id: string) => {
  const { data, error, isLoading } = useOrderById(parseInt(id));

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent />;
  }

  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary={`Дата: ${data.date}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Стол: ${data.tableNumber}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Статус: ${data.status}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Официант: ${data.employee}`} />
        </ListItem>
      </List>
      <DataGrid
        columns={dishesInOrderColumns}
        rows={data.dishesInOrder ? data.dishesInOrder : undefined}
        getRowId={(row) => row.idDish}
        disableColumnMenu={true}
        hideFooter={true}
      />
    </>
  );
};

export default OrderId;
