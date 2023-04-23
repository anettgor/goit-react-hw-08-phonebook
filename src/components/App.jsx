import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { AddContact } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { loadContacts } from './../redux/selectors';

export const App = () => {
  const contacts = useSelector(loadContacts);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

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
