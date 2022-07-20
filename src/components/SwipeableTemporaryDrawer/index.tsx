import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import Card from "../Card";
import { Container } from "@mui/material";
import DropDown from "../DropDown";
import axios from "axios";

const drawerWidth = 240;

const ClippedDrawer = () => {
  const [event, setEvent] = useState(2);
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [agency, setAgency] = useState("");
  const [account, setAccount] = useState("");
  const [document, setDocument] = useState("");
  const [show, setShow] = useState(false);

  const getData = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(
      `https://api-q2-test.herokuapp.com/data?id=${event.target.value}`,
      { headers }
    );
    response.data.result.map((option) => {
      setName(option.name);
      setBank(option.bank.bankName);
      setAgency(option.bank.agency);
      setAccount(option.bank.account);
      setDocument(option.document);
    });
    setShow(true);
  };

  useEffect(() => {
    getData();
  }, [event]);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Bank
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItemButton>
              <ListItemIcon sx={{ gap: 4 }}>
                <PersonIcon />
                {"Informações"}
              </ListItemIcon>
              <ListItemText />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Container
        component="main"
        sx={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: 20,
        }}
      >
        <DropDown setValue={setEvent} value={event} />
        {show ? (
          <Card
            name={name}
            bank={bank}
            agency={`Agência: ${agency}`}
            account={`Conta: ${account}`}
            document={`Documento: ${document}`}
            data={`Data: ${date}`}
          />
        ) : (
          <Card />
        )}
      </Container>
    </Box>
  );
};

export default ClippedDrawer;
