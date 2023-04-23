import css from './ContactList.module.css';
import { removeContact } from './../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getValue, getContacts } from './../../redux/selectors';
export const ContactList = () => {
  // const contacts = useSelector(loadContacts);
  const filter = useSelector(getValue);

  const filteredContacts = useSelector(getContacts).filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={css.items}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {' '}
              <b>Name: </b> {contact.name}{' '}
            </p>
            <p>
              <b>Number: </b>
              {contact.number}
            </p>
            <button
              type="button"
              id={contact.id}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
