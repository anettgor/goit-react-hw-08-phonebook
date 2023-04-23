import {
  addContact,
  removeContact,
  setStatusFilter,
  loadContacts,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [];
export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [removeContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [loadContacts]: (state, action) => {
    return (state = action.payload);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setStatusFilter]: (state, action) => {
    return (state = action.payload);
  },
});
