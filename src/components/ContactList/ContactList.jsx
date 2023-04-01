import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact, filter }) => {
  console.log('contact list', contacts);
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  return (
    <ul className={css.items}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <p>
            {' '}
            <b>Name: </b> {contact.name}{' '}
          </p>
          <p>
            <b>Number: </b>
            {contact.number}
          </p>
          <button id={contact.id} onClick={deleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
};
