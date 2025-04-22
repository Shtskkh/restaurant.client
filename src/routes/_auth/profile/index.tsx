import { createFileRoute } from "@tanstack/react-router";
import ProfileIndex from "../../../pages/profile";

export const Route = createFileRoute("/_auth/profile/")({
  component: ProfileIndex,
});
