import { useDishes } from "../../utils/apiHooks.ts";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import ErrorComponent from "../../components/errorComponent.tsx";
import { DataGrid } from "@mui/x-data-grid";
import { dishesColumns } from "../../utils/columns.ts";

const DishesIndex = () => {
  const { data, error, isLoading } = useDishes();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent />;
  }

  return (
    <DataGrid
      columns={dishesColumns}
      rows={data}
      getRowId={(row) => row.idDish}
      disableColumnMenu={true}
      hideFooter={true}
    />
  );
};

export default DishesIndex;
