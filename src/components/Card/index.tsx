import React from "react";
import Box from "@mui/material/Box";

const Card: React.FC<any> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: 800,
        height: 650,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <h1>{props.name}</h1>
      <h1>{props.bank}</h1>
      <h2>{props.agency}</h2>
      <h2>{props.account}</h2>
      <h2>{props.document}</h2>
      <h3>{props.data}</h3>
    </Box>
  );
};

export default Card;
