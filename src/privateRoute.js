import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth";
import AdminLayout from "layouts/Admin.js";

function PrivateRoute({ ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authTokens ? (
          <AdminLayout {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
}

export default PrivateRoute;