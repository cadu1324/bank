import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"} component={() => <Login />} />
        <PrivateRoute exact path={"/home"} component={() => <Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
