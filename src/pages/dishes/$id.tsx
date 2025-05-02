import { useDish } from "../../utils/apiHooks.ts";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import ErrorComponent from "../../components/errorComponent.tsx";
import { DataGrid } from "@mui/x-data-grid";
import { productsInDishColumns } from "../../utils/columns.ts";
import { List, ListItem, ListItemText } from "@mui/material";

const DishId = (id: string) => {
  const { data, error, isLoading } = useDish(parseInt(id));

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <List>
        <ListItem>
          <ListItemText
            primary={`Вес (объём): ${data.weightVolume} ${data.unit}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Доступен для заказа: ${data.availability ? "да" : "нет"}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Стоимость: ${data.cost} р.`} />
        </ListItem>
      </List>
      {data.products?.length === 0 || data.products == undefined ? null : (
        <DataGrid
          columns={productsInDishColumns}
          rows={data.products}
          getRowId={(row) => row.idProduct}
          disableColumnMenu={true}
          hideFooter={true}
        />
      )}
    </>
  );
};

export default DishId;
