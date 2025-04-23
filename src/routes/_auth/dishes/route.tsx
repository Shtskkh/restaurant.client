import { createFileRoute } from "@tanstack/react-router";
import pageLayout from "../../../components/layouts/pageLayout.tsx";

export const Route = createFileRoute("/_auth/dishes")({
  head: () => ({
    meta: [{ title: "Блюда" }],
  }),
  component: () => pageLayout("Блюда"),
});
