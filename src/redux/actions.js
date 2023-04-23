const { createAction } = require('@reduxjs/toolkit');

export const addContact = createAction('contacts/addContact');

export const removeContact = createAction('contacts/removeContact');

export const loadContacts = createAction('contacts/loadContacts');

export const setStatusFilter = createAction('filter/setStatusFilter');
