import { createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import RootLayout from "../components/layouts/rootLayout.tsx";
import { AuthStoreType } from "../utils/authStore.ts";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  auth: AuthStoreType;
}>()({
  component: RootLayout,
});
