import React from "react";
import { BrowserRouter, Route, Routes as RouterDomRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterDomRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
        <Route path="*" element={<div> Page not found </div>} />
      </RouterDomRoutes>
    </BrowserRouter>
  );
};

export default Routes;
