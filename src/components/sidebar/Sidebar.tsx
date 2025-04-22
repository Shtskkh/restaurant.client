import { Divider, Drawer, List } from "@mui/material";
import { tabs } from "./tabs.tsx";
import { ListItemLink } from "./ListItemLink.tsx";

const Sidebar = () => {
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
      </List>
    </Drawer>
  );
};

export default Sidebar;
