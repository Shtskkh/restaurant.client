import { createFileRoute } from "@tanstack/react-router";
import DishesIndex from "../../../pages/dishes";

export const Route = createFileRoute("/_auth/dishes/")({
  component: DishesIndex,
});
