import { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button, Typography } from '@mui/material';
import useAuthResponse from '../../hooks/useAuthResponse';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()

const Card = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const auth = useAuthResponse({ url: 'login' });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        width: 350,
        height: 350,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: '#fafafa',
      }}>
      
      <Typography variant="h2" color="#246eb1">Bank</Typography>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}>
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}>
        <Button variant="contained" onClick={() => auth({ email, password })}>
          Entrar
        </Button>
        <Button onClick={() => {navigate('register')}}>
          Registrar
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
