import { GridColDef } from "@mui/x-data-grid";
import { Order, Staff } from "./types.ts";

export const staffColumns: GridColDef<Staff>[] = [
  {
    field: "idEmployee",
    headerName: "ID",
    flex: 0.25,
  },
  {
    field: "lastName",
    headerName: "Фамилия",
    flex: 1,
  },
  {
    field: "firstName",
    headerName: "Имя",
    flex: 1,
  },
  {
    field: "middleName",
    headerName: "Отчество",
    flex: 1,
  },
  {
    field: "position",
    headerName: "Должность",
    flex: 1,
  },
  {
    field: "phoneNumber",
    headerName: "Номер телефона",
    flex: 1,
  },
];

export const ordersColumns: GridColDef<Order>[] = [
  {
    field: "idOrder",
    headerName: "ID",
    flex: 0.25,
  },
  {
    field: "date",
    headerName: "Дата",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Статус",
    flex: 1,
  },
  {
    field: "tableNumber",
    headerName: "Столик",
    flex: 1,
  },
  {
    field: "employee",
    headerName: "Официант",
    flex: 1,
  },
];
