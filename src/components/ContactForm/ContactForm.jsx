import { Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { getContacts } from './../../redux/phonebook/selectors';
import { addContact } from './../../redux/phonebook/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      name,
      number,
    };
    if (name.trim() === '' || number.trim() === '') {
      Notify.info('Please do not leave the contact field empty');
    } else if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.info(`Contact ${name} is already in your contact list`);
    } else if (contacts.find(contact => contact.number === number)) {
      Notify.info(
        `Contact ${number} is already in your contact list under a different name`
      );
    } else {
      Notify.success(`Contact ${name} successfully added`);
      dispatch(addContact(newContact));
      form.reset();
      console.log(newContact);
    }
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
      <h1>Add new contact</h1>
      <TextField
        sx={{ width: '80vw', maxWidth: 500 }}
        id="outlined-controlled"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
      />
      <TextField
        sx={{ width: '80vw', maxWidth: 500 }}
        id="outlined-controlled"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
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
        Add contact
      </Button>
    </Box>
  );
};
