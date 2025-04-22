import { createFileRoute } from "@tanstack/react-router";
import SuppliesIndex from "../../../pages/supplies";

export const Route = createFileRoute("/_auth/supplies/")({
  component: SuppliesIndex,
});
