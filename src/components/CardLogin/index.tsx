import { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Button, Typography } from '@mui/material';
import useAuthResponse from '../../hooks/useAuthResponse';
import { useNavigate } from 'react-router-dom';
import { Credentials } from '../../utils/types';

const Card = () => {
  const [credentials, setCredentials] = useState<Credentials>({ email: '', password: ''});

  const {email, password} = credentials;

  const navigate = useNavigate();

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
      <Typography variant="h2" color="#246eb1">
        Bank
      </Typography>

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
          onChange={(e) => setCredentials(({ password }) => (
            { email: (e.target.value), password }
          ))}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setCredentials(({ email }) => (
            { email, password: (e.target.value) }
          ))}
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
        <Button
          onClick={() => {
            navigate('/register');
          }}>
          Registrar
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
