import { createFileRoute } from "@tanstack/react-router";
import DishId from "../../../../pages/dishes/$id.tsx";

export const Route = createFileRoute("/_auth/dishes_/$id/")({
  component: () => DishId(Route.useParams().id),
});
