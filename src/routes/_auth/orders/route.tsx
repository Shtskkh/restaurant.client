import { createFileRoute } from "@tanstack/react-router";
import pageLayout from "../../../components/layouts/pageLayout.tsx";

export const Route = createFileRoute("/_auth/orders")({
  head: () => ({
    meta: [{ title: "Заказы" }],
  }),
  component: () => pageLayout("Заказы"),
});
