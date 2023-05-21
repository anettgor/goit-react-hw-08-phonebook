import { NavLink } from 'react-router-dom';
import { ListItem, Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '2vw',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ListItem
        component={NavLink}
        sx={{
          color: '#01090f',
          textAlign: 'center',

          '&.active': {
            color: '#0c6196',
            borderRadius: '25px',
            fontWeight: 'bold',
          },
          '&:hover:not(.active)': {
            textDecoration: 'underline',
          },
        }}
        to="/register"
      >
        Register
      </ListItem>

      <ListItem
        component={NavLink}
        sx={{
          color: '#01090f',
          textAlign: 'center',

          '&.active': {
            color: '#0c6196',
            borderRadius: '25px',
            fontWeight: 'bold',
          },
          '&:hover:not(.active)': {
            textDecoration: 'underline',
          },
        }}
        to="/login"
      >
        Log In
      </ListItem>
    </Box>
  );
};
