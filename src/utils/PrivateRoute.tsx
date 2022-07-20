import React from "react";
import { Navigate, Route } from "react-router-dom";
import Authenticated from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        Authenticated() ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      )}
    />
  );
};

export default PrivateRoute;
