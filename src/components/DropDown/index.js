import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

const BasicSelect = () => {
  const [data, setData] = React.useState([]);
  const [event, setEvent] = React.useState(0);
  const handleChange = (event) => {
    setEvent(event.target.value);
  };

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/data");
    setData(response.data)
  }
  
  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Box sx={{ minWidth: 1370, position: "absolute", marginTop: -10 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nome</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={event}
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
