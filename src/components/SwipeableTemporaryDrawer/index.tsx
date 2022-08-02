import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import Card from '../Card';
import { Container } from '@mui/material';
import DropDown from '../DropDown';
import useDataResponse from '../../hooks/useDataResponse';
import CurrentDay from '../../utils/dates/index.day';

const drawerWidth = 240;

const ClippedDrawer = () => {
  const [event, setEvent] = useState(1);

  const data = useDataResponse(event);
  const date = CurrentDay
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
            boxSizing: 'border-box',
          },
        }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton>
              <ListItemIcon sx={{ gap: 4 }}>
                <PersonIcon />
                {'Informações'}
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
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          gap: 20,
        }}>
        <DropDown setValue={setEvent} value={event} />
        {data.show ? (
          <Card
            name={data.user.name}
            bank={data.user.bank.bankName}
            agency={`Agência: ${data.user.bank.agency}`}
            account={`Conta: ${data.user.bank.account}`}
            document={`Documento: ${data.user.document}`}
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
