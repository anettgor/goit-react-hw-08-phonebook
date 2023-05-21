import { NavLink } from 'react-router-dom';
import { ListItem, Box } from '@mui/material';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '25px',
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
        to="/"
      >
        Home
      </ListItem>
      {isLoggedIn && (
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
          to="/phonebook"
        >
          Contacts
        </ListItem>
      )}
    </Box>
  );
};
