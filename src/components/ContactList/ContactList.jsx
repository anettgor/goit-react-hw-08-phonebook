import css from './ContactList.module.css';
import { deleteContact } from './../../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { getStatusFilter, getContacts } from './../../redux/selectors';

export const ContactList = () => {
  const filter = useSelector(getStatusFilter);

  const filteredContacts = useSelector(getContacts).filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  const dispatch = useDispatch();

  return (
    <ul className={css.items}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              <b>Name: </b>
              {contact.name}
            </p>
            <p>
              <b>Number: </b>
              {contact.phone}
            </p>
            <button
              type="button"
              id={contact.id}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
