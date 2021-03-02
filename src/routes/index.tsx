import React from "react";

import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import Logo from "../static/logo.svg";

const Routes = () => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <img src={Logo} alt="logo" height={80} />
      </div>
    );
  }

  return (
    <BrowserRouter>{isLoggedIn ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};

export default Routes;
