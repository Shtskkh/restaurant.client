import { useDishes } from "../../utils/apiHooks.ts";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import ErrorComponent from "../../components/errorComponent.tsx";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { dishesColumns } from "../../utils/columns.ts";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@mui/material";

const DishesIndex = () => {
  const { data, error, isLoading } = useDishes();
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

  return (
    <>
      <Button variant="contained" sx={{ marginBottom: 4 }}>
        Добавить блюдо
      </Button>
      <DataGrid
        columns={dishesColumns}
        rows={data}
        getRowId={(row) => row.idDish}
        disableColumnMenu={true}
        onRowDoubleClick={handleClick}
        hideFooter={true}
      />
    </>
  );
};

export default DishesIndex;
