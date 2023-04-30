import css from './ContactForm.module.css';
import { getContacts } from './../../redux/selectors';
import { addContact } from './../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      name: name,
      phone: number,
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
      dispatch(addContact(newContact));
      form.reset();
    }
  };

  return (
    <form className={css.formContainer} onSubmit={handleSubmit}>
      <label className={css.form}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Please enter a name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.form}>
        Phone Number
        <input
          type="tel"
          name="number"
          placeholder="Please enter a pnone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
