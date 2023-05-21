import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

export const AppHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      color="#ccc"
      sx={{
        width: '100vw',
        flexGrow: 1,
        borderBottom: '1px solid #678dde',
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          p: '10px 5vw',
          backgroundColor: 'transparent',
          d: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>
    </Box>
  );
};
