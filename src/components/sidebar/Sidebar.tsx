import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { tabs } from "./tabs.tsx";
import { ListItemLink } from "./ListItemLink.tsx";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "@tanstack/react-router";
import { authStore } from "../../utils/authStore.ts";

const Sidebar = () => {
  const navigate = useNavigate();
  const { clear } = authStore();
  const handeLogOut = () => {
    clear();
    navigate({ to: "/login" }).then();
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        {tabs.map((tab) => (
          <ListItemLink
            key={tab.to}
            to={tab.to}
            text={tab.text}
            icon={tab.icon}
          />
        ))}
        <Divider />
        <ListItem disableGutters>
          <ListItemButton onClick={handeLogOut}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Выйти" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
