import React, { useContext } from "react";
import Spinner from "../ui/Spinner/Spinner";
import { Navigate } from "react-router";
import {  useAuth } from "../services/authentication/authentication.context";

const Protected = ({ children }) => {
  const { user, isLoading} = useAuth();

  if (isLoading) return <Spinner />;
  if (!user) return <Navigate to="/login" replace />;

  return <>{children}</>;
};

export default Protected;
