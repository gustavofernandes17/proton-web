import React from "react";

import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>{isLoggedIn ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};

export default Routes;
