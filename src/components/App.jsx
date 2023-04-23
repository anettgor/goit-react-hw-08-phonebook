import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { AddContact } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from './../redux/selectors';
import { loadContacts } from './../redux/actions';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    const localStorageContacts = localStorage.getItem('contacts');
    if (localStorageContacts) {
      dispatch(loadContacts(JSON.parse(localStorageContacts)));
    }
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1> Phonebook</h1>
      <AddContact />

      <h2> Contacts </h2>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 && <ContactList />}
      {contacts.length === 0 && <p>Your contact list is empty</p>}
    </div>
  );
};
