import { createFileRoute } from "@tanstack/react-router";
import DashboardIndex from "../../../pages/dashboard";

export const Route = createFileRoute("/_auth/dashboard/")({
  component: DashboardIndex,
});
