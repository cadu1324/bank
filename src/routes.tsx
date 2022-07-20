import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/login"} component={() => <Login />} />
        <Route exact path={"/register"} component={() => <Register />} />
        <PrivateRoute exact path={"/"} component={() => <Home />} />
        <Route exact path="*" component={() => <div> Page not found </div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
