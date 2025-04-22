import { createFileRoute } from "@tanstack/react-router";
import StaffIndex from "../../../pages/staff";

export const Route = createFileRoute("/_auth/staff/")({
  component: StaffIndex,
});
