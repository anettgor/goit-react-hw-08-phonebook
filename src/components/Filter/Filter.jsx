import PropTypes from 'prop-types';
import css from './../ContactForm/ContactForm.module.css';
export const Filter = ({ findContact }) => {
  return (
    <>
      <label className={css.form}>
        Find contacts by name
        <input
          type="text"
          name="find contact"
          placeholder="Please enter contact's name"
          onInput={findContact}
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  findContact: PropTypes.func,
};
