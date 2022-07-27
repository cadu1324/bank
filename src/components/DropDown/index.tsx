import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import { Users, UserResponse, Propertie } from "./types";

const BasicSelect : React.FC<Propertie> = ({ setValue, value}) => {
  const [data, setData] = React.useState<Users[]>([]);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setValue(Number(event.target.value))
  };

  const getData = async () => {
    const token = localStorage.getItem("token");
    
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get<UserResponse>("https://api-q2-test.herokuapp.com/data", { headers });
    const result = response.data.result.users.map((option) => {
      return option
    })
    setData(result)
  }
  
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ minWidth: 750, position: "absolute", marginTop: -10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nome</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Data"
          onChange={handleChange}
        >
          {data.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>{option.name ?? option.id}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
