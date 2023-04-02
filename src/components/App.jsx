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
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      id: nanoid(),
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
      setContacts([...contacts, newContact]);
      form.reset();
    }
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    Notify.info('Contact Successfully Deleted');
  };

  const findContact = e => {
    setFilter(e.target.value.toLowerCase().trim());
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
