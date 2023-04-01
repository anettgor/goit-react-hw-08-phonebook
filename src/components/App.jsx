import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { ContactList } from './ContactList/ContactList';
import { AddContact } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const loadedContacts = load('contacts');
    if (loadedContacts) {
      setContacts(loadedContacts);
      console.log('%c first effect loadContacts', 'background-color: lavender');
    }
  }, []);

  useEffect(() => {
    if (contacts !== []) {
      setContacts(contacts);
      save('contacts', contacts);
      console.log('%c update effect', 'background-color: lightpink');
    }
    // return;
  }, [contacts]);

  const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  };

  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
    const newContact = {
      id: id,
      name: name,
      number: number,
    };

    if (
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
      setContacts(prevContacts => [...prevContacts, newContact]);
      form.reset();
    }
  };

  const deleteContact = e => {
    e.preventDefault();
    const contactsNew = [...contacts]; // TODO or [...contacts]
    const index = contactsNew.findIndex(contact => contact.id === e.target.id);
    contactsNew.splice(index, 1);
    setContacts(contactsNew);
    Notify.info('Contact Successfully Deleted');
  };

  const findContact = e => {
    setFilter(e.target.value.toLowerCase());
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div className={css.container}>
      <h1> Phonebook</h1>
      <AddContact handleSubmit={handleSubmit} />

      <h2> Contacts </h2>
      {contacts.length > 1 && <Filter findContact={findContact} />}
      {contacts.length > 0 && (
        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
          filter={filter}
        />
      )}
      {contacts.length === 0 && <p>Your contact list is empty</p>}
    </div>
  );
};
