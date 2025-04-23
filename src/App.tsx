import { CssBaseline } from "@mui/material";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./utils/router.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/clients.ts";

function App() {
  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
