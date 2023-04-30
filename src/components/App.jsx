import { useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from './../redux/selectors';
import { fetchContacts } from './../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1> Phonebook</h1>
      <ContactForm />

      <h2> Contacts </h2>
      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 && <ContactList />}
      {contacts.length === 0 && <p>Your contact list is empty</p>}
    </div>
  );
};
