import React from "react";
import { useSelector } from "react-redux";
import NotFound from "../../pages/NotFound";
import { Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const userIsVerified = useSelector((state) => state.auth?.user?.verified);

  return userIsVerified ? (
    <NotFound />
  ) : (
    <>
      <Outlet />
    </>
  );
};

export default PublicRoutes;