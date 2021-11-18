import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter,
  // fetchContactRequest,
  // fetchContactSuccess,
  // fetchContactError,
  
  // deleteContactRequest,
  // deleteContactSuccess,
  // deleteContactError
} from "./actions.js";
import {fetchContacts ,deleteContact } from './contacts-operations'

const phonebookContacts = createReducer([], {
  [fetchContacts.fulfilled]:(_, {payload})=>payload ,
  [addContactSuccess]: (state, { payload }) => {
    console.log(payload);
    if (state.some(({ name }) => name === payload.name)) {
      alert(`Attention, the contact is already in contacts list`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const phonebookFilter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
export const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

export default combineReducers({
  phonebookContacts,
  phonebookFilter,
  loading
});


