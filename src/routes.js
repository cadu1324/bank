import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Pag1 from "./pages/pag1";
import Pag2 from "./pages/pag2";
import Pag3 from "./pages/pag3";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/page1"} component={Pag1} />
        <PrivateRoute exact path={"/page2"} component={Pag2} />
        <PrivateRoute exact path={"/page3"} component={Pag3} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
