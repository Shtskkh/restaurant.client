import { createFileRoute } from "@tanstack/react-router";
import pageLayout from "../../../../components/layouts/pageLayout.tsx";

export const Route = createFileRoute("/_auth/staff_/$id")({
  head: ({ params: { id } }) => ({
    meta: [{ title: `Сотрудник №${id}` }],
  }),
  component: () => pageLayout(`Сотрудник №${Route.useParams().id}`),
});
