import { useEffect } from 'react';
import { ContactList } from './../components/ContactList/ContactList';
import { ContactForm } from './../components/ContactForm/ContactForm';
import { Filter } from './../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from './../redux/phonebook/selectors';
import { fetchContacts } from './../redux/phonebook/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />

      {contacts.length > 1 && <Filter />}
      {contacts.length > 0 && <ContactList />}
      {contacts.length === 0 && (
        <p
          style={{
            display: 'flex',
            gap: '25px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
            color: '#01090f',
          }}
        >
          Your contact list is empty
        </p>
      )}
    </div>
  );
}
