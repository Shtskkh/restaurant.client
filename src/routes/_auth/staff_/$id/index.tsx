import { createFileRoute } from "@tanstack/react-router";
import StaffId from "../../../../pages/staff/$id.tsx";

export const Route = createFileRoute("/_auth/staff_/$id/")({
  component: () => StaffId(Route.useParams().id),
});
