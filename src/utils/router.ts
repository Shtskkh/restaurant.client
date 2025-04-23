import { createRouter } from "@tanstack/react-router";
import { queryClient } from "./clients.ts";
import { routeTree } from "../routeTree.gen.ts";
import { PendingComponent } from "../components/pendingComponent.tsx";

export const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPendingComponent: PendingComponent,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
