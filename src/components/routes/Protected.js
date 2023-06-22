import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const Protected = ({ children, isSignedIn }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
