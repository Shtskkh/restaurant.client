﻿import { createFileRoute, redirect } from "@tanstack/react-router";
import AuthLayout from "../components/layouts/authLayout.tsx";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        replace: true,
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AuthLayout,
});
