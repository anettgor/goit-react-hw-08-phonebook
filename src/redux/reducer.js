import { addContact, removeContact, setStatusFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [];
export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact]: (state, action) => {
    console.log(action.payload);
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setStatusFilter]: (state, action) => {
    console.log(state);
    return (state = action.payload);
  },
});
