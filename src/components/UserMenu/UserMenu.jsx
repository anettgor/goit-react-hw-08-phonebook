import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth.js';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        gap: '2vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p
        style={{
          color: '#027ecc',
          display: 'inline-Block',
        }}
      >
        Welcome, <b>{user.name}</b>
      </p>

      <ListItem
        component={NavLink}
        sx={{
          color: '#420080',
          textAlign: 'center',
          width: 'auto',

          '&:hover:not(.active)': {
            textDecoration: 'underline',
          },
        }}
        onClick={() => dispatch(logOut())}
        to="/"
      >
        Log Out
      </ListItem>
    </Box>
  );
};
