import ErrorComponent from "../../components/errorComponent.tsx";
import { useStaff } from "../../utils/apiHooks.ts";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { staffColumns } from "../../utils/columns.ts";
import { useNavigate } from "@tanstack/react-router";

const StaffIndex = () => {
  const { data, error, isLoading } = useStaff();
  const navigate = useNavigate();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  const handleClick = (gridParams: GridRowParams): void => {
    const id: string = gridParams.row.idEmployee;
    navigate({ to: "/staff/$id", params: { id } }).then();
  };

  return (
    <DataGrid
      columns={staffColumns}
      rows={data}
      getRowId={(row) => row.idEmployee}
      disableColumnMenu={true}
      onRowDoubleClick={handleClick}
      hideFooter={true}
    />
  );
};

export default StaffIndex;
