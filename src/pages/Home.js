import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box
      component="span"
      sx={{
        p: 2,
        mt: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Phonebook App ☎</h1>

      <h2>
        Simplify your contact list with our Phonebook App. Log in or register to
        get started!
      </h2>
    </Box>
  );
}
