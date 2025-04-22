import { createFileRoute } from "@tanstack/react-router";
import pageLayout from "../../components/layouts/pageLayout.tsx";

export const Route = createFileRoute("/_auth/staff")({
  head: () => ({
    meta: [{ title: "Сотрудники" }],
  }),
  component: () => pageLayout("Сотрудники"),
});
