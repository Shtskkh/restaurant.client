import { createFileRoute } from "@tanstack/react-router";
import OrdersIndex from "../../../pages/orders";

export const Route = createFileRoute("/_auth/orders/")({
  component: OrdersIndex,
});
