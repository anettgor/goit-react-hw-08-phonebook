import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: '25px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '10%',
        color: '#fff',
      }}
    >
      <h2>My Account</h2>

      <TextField
        sx={{ width: '80vw', maxWidth: 500 }}
        id="outlined-controlled"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
      />

      <TextField
        sx={{ width: '80vw', maxWidth: 500 }}
        id="outlined-controlled"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />

      <Button
        sx={{
          height: 45,
          width: 200,
          mt: '20px',
          color: '#fff',
          backgroundColor: '#209eec',
          borderRadius: '25px',

          '&:hover:not(.active)': {
            color: '#fff',
            backgroundColor: '#027ecc',
          },
        }}
        type="submit"
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
};
