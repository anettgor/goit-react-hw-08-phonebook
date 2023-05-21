import { useSelector, useDispatch } from 'react-redux';
import { List, IconButton, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { deleteContact } from './../../redux/phonebook/operations';
import {
  getStatusFilter,
  getContacts,
} from './../../redux/phonebook/selectors';

export const ContactList = () => {
  const filter = useSelector(getStatusFilter);
  const filteredContacts = useSelector(getContacts).filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  const dispatch = useDispatch();

  return (
    <List sx={{ margin: '0 auto', width: '80vw' }}>
      {filteredContacts.map(contact => {
        return (
          <ListItem
            key={contact.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              transition: 'borderBottom 500ms',

              '&:hover': {
                borderBottom: ' 1px solid #e5e5e5',
              },
            }}
          >
            <div>
              <p>
                <b>{contact.name}</b>: {contact.number}
              </p>
            </div>
            <IconButton
              onClick={() => dispatch(deleteContact(contact.id))}
              aria-label="delete"
              type="button"
              variant="contained"
              color="error"
              size="small"
              id={contact.id}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};
