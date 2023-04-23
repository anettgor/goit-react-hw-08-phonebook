const { createAction } = require('@reduxjs/toolkit');

export const addContact = createAction('contacts/addContact');

export const removeContact = createAction('contacts/removeContact');

export const getContacts = createAction('contacts/getContacts');

export const loadContacts = createAction('contacts/loadContacts');

export const setStatusFilter = createAction('filter/setStatusFilter');
