import { createFileRoute } from "@tanstack/react-router";
import pageLayout from "../../../components/layouts/pageLayout.tsx";

export const Route = createFileRoute("/_auth/dashboard")({
  head: () => ({
    meta: [{ title: "Сводка" }],
  }),
  component: () => pageLayout("Сводка"),
});
