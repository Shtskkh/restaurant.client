import { createFileRoute } from "@tanstack/react-router";
import pageLayout from "../../components/layouts/pageLayout.tsx";

export const Route = createFileRoute("/_auth/profile")({
  head: () => ({
    meta: [{ title: "Профиль" }],
  }),
  component: () => pageLayout("Профиль"),
});
