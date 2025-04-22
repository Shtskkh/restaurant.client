import { HeadContent, Outlet } from "@tanstack/react-router";

export const RootComponent = () => {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  )
}