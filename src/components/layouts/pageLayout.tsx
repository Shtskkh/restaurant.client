import { Box, Typography } from "@mui/material";
import { Outlet } from "@tanstack/react-router";

const pageLayout = (title: string) => {
  return (
    <Box padding={3}>
      <Typography
        variant="h4"
        color="textPrimary"
        mt={3}
        mb={3}
        sx={{ fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Outlet />
    </Box>
  );
};

export default pageLayout;
