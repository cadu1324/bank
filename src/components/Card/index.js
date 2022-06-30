import React from "react";
import Box from "@mui/material/Box";

const Card = (props) => {
    return(
        <Box 
            sx={{
                alignContent:"center",
                width: 600,
                height: 350,
                borderRadius: 2,
                boxShadow: 2,
            }}
        >  
            <h1>{props.text}</h1>
        </Box>
    );
};

export default Card;