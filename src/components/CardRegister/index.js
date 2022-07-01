import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import svgLogo from "../../assets/quero-2-pay-logo.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Card = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const headers = {
    "Content-Type": "application/json",
  };

  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  const post = () => {
    axios
      .post(
        `http://localhost:4000/users`,
        {
          email: email,
          password: password,
        },
        { headers }
      )
      .then((response) => {
        if (response.status === 201) {
          localStorage.setItem("token", response.data.accessToken);
          handleClick();
        }
        return false;
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        width: 350,
        height: 350,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#fafafa",
      }}
    >
      <img src={svgLogo} alt="Logo svg" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={() => post()}>
        Registar
      </Button>
    </Box>
  );
};

export default Card;
