import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/Login"} component={() => {return(<div>Página 1</div>)}} />
        <PrivateRoute exact path={"/page2"} component={() => {return(<div>Página 2</div>)}} />
        <PrivateRoute exact path={"/page3"} component={() => {return(<div>Página 3</div>)}} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
