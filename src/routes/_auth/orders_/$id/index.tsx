import { createFileRoute } from "@tanstack/react-router";
import OrderId from "../../../../pages/orders/$id.tsx";

export const Route = createFileRoute("/_auth/orders_/$id/")({
  component: () => OrderId(Route.useParams().id),
});
