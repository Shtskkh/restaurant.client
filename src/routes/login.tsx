import { createFileRoute } from "@tanstack/react-router";
import LoginIndex from "../pages/login";

export type LoginSearchParams = {
  redirect?: string;
};

export const Route = createFileRoute("/login")({
  validateSearch: (search: LoginSearchParams) => {
    return {
      redirect: search.redirect,
    };
  },
  component: () => LoginIndex(Route.useSearch().redirect),
});
