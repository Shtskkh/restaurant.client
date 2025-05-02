import { PendingComponent } from "../../components/pendingComponent.tsx";
import ErrorComponent from "../../components/errorComponent.tsx";
import { DataGrid } from "@mui/x-data-grid";
import { suppliesColumns } from "../../utils/columns.ts";
import { useSupplies } from "../../utils/apiHooks.ts";

const SuppliesIndex = () => {
  const { data, error, isLoading } = useSupplies();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent />;
  }

  return (
    <DataGrid
      columns={suppliesColumns}
      rows={data}
      getRowId={(row) => row.date}
      disableColumnMenu={true}
      hideFooter={true}
    />
  );
};

export default SuppliesIndex;
