import { useOrderById } from "../../utils/apiHooks.ts";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import ErrorComponent from "../../components/errorComponent.tsx";
import { List, ListItem, ListItemText } from "@mui/material";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { dishesInOrderColumns } from "../../utils/columns.ts";
import { useNavigate } from "@tanstack/react-router";

export const OrderId = (id: string) => {
  const { data, error, isLoading } = useOrderById(parseInt(id));
  const navigate = useNavigate();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent />;
  }

  const handleClick = (gridParams: GridRowParams): void => {
    const id: string = gridParams.row.idDish;
    navigate({ to: "/dishes/$id", params: { id } }).then();
  };

  const dateSplit = data.date.split("T");

  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary={`Дата: ${dateSplit[0]} ${dateSplit[1]}`} />
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
        onRowDoubleClick={handleClick}
      />
    </>
  );
};

export default OrderId;
