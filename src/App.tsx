import { CssBaseline } from "@mui/material";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./utils/router.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/clients.ts";
import { authStore } from "./utils/authStore.ts";

function App() {
  const auth = authStore();
  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} context={{ auth }} />
      </QueryClientProvider>
    </>
  );
}

export default App;
