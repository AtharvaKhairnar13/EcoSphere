import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {

  const userIsVerified = useSelector((state) => state.auth?.user);

  return userIsVerified ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoutes;