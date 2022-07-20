import React from "react";
import RegisterStyle from "./styles";
import CardRegister from "../../components/CardRegister";

const Register = () => {
  document.title = "Register";
  return (
    <RegisterStyle>
      <CardRegister />
    </RegisterStyle>
  );
};

export default Register;
