import { useStaffById } from "../../utils/apiHooks.ts";
import { getRouteApi } from "@tanstack/react-router";
import { PendingComponent } from "../../components/pendingComponent.tsx";
import ErrorComponent from "../../components/errorComponent.tsx";
import { List, ListItem, ListItemText } from "@mui/material";

const route = getRouteApi("/_auth/staff_/$id");
const StaffId = () => {
  const { id } = route.useParams();
  const { data, error, isLoading } = useStaffById(parseInt(id));

  if (isLoading) {
    return <PendingComponent />;
  }

  if (!data || error) {
    return <ErrorComponent />;
  }

  return (
    <List>
      <ListItem>
        <ListItemText primary={`Фамилия: ${data.lastName}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Имя: ${data.firstName}`} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={`Отчество: ${data.middleName == undefined ? "−" : data.middleName}`}
        />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Должность: ${data.position}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Номер телефона: ${data.phoneNumber}`} />
      </ListItem>
    </List>
  );
};

export default StaffId;
