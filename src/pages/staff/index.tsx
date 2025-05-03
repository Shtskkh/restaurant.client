import ErrorComponent from "../../components/errorComponent.tsx";
import { useStaff } from "../../utils/apiHooks.ts";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import { staffColumns } from "../../utils/columns.ts";
import { useNavigate } from "@tanstack/react-router";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";

const StaffIndex = () => {
  const { data, error, isLoading } = useStaff();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent />;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRowDoubleClick = (gridParams: GridRowParams): void => {
    const id: string = gridParams.row.idEmployee;
    navigate({ to: "/staff/$id", params: { id } }).then();
  };

  return (
    <>
      <Button variant="contained" sx={{ marginBottom: 4 }} onClick={handleOpen}>
        Добавить сотрудника
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle align="center">Новый сотрудник</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 1 }}>
            Заполните форму нового сотрудника
          </DialogContentText>
          <TextField required label="Фамилия" margin="dense" fullWidth />
          <TextField required label="Имя" margin="dense" fullWidth />
          <TextField label="Отчество" margin="dense" fullWidth />
          <TextField required label="Должность" margin="dense" fullWidth />
          <TextField required label="Номер телефона" margin="dense" fullWidth />
          <TextField required label="Логин" margin="dense" fullWidth />
          <TextField required label="Пароль" margin="dense" fullWidth />
          <DialogActions sx={{ mt: 2 }}>
            <Button onClick={handleClose}>Отмена</Button>
            <Button type="submit">Добавить</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <DataGrid
        columns={staffColumns}
        rows={data}
        getRowId={(row) => row.idEmployee}
        disableColumnMenu={true}
        onRowDoubleClick={handleRowDoubleClick}
        hideFooter={true}
      />
    </>
  );
};

export default StaffIndex;
