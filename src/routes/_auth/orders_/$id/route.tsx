import { createFileRoute } from "@tanstack/react-router";
import pageLayout from "../../../../components/layouts/pageLayout.tsx";

export const Route = createFileRoute("/_auth/orders_/$id")({
  head: ({ params: { id } }) => ({
    meta: [{ title: `Заказ №${id}` }],
  }),
  component: () => pageLayout(`Заказ №${Route.useParams().id}`),
});
