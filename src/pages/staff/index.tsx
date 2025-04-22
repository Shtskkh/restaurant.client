import ErrorComponent from "../../components/errorComponent.tsx";
import { useStaff } from "../../utils/apiHooks.ts";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import { DataGrid } from "@mui/x-data-grid";
import { staffColumns } from "../../utils/columns.ts";

const StaffIndex = () => {
  const { data, error, isLoading } = useStaff();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <DataGrid
      columns={staffColumns}
      rows={data}
      getRowId={(row) => row.idEmployee}
      disableColumnMenu={true}
      hideFooter={true}
    />
  );
};

export default StaffIndex;
