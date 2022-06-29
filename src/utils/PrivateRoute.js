import React from "react";
import { Redirect, Route } from "react-router-dom";
import Authenticated from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        Authenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      )}
    />
  );
};

export default PrivateRoute;
