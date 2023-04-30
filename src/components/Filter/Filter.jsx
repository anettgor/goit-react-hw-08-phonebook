import css from './../ContactForm/ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from './../../redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <>
      <label className={css.form}>
        Find contacts by name
        <input
          type="text"
          name="find contact"
          placeholder="Please enter contact's name"
          onInput={handleChange}
        ></input>
      </label>
    </>
  );
};
