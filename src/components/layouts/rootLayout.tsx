import { HeadContent, Outlet } from "@tanstack/react-router";

const RootLayout = () => {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  );
};

export default RootLayout;
