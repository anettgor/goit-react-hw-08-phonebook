import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

import { setStatusFilter } from './../../redux/phonebook/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '25px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '5%',
        color: '#fff',
      }}
    >
      <div>
        <h1>Your contacts</h1>
        <h3>Find contacts by name </h3>
      </div>
      <TextField
        sx={{ width: '80vw', maxWidth: 500 }}
        id="outlined-controlled"
        label="Enter contact's name"
        variant="outlined"
        type="text"
        name="find contact"
        onInput={handleChange}
      />
    </Box>
  );
};
