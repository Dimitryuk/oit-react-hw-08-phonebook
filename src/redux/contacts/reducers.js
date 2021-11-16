import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  changeFilter,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError
} from "./actions.js";

const phonebookContacts = createReducer([], {
  [fetchContactSuccess]:(_, {payload})=>payload ,
  [addContactSuccess]: (state, { payload }) => {
    console.log(payload);
    if (state.some(({ name }) => name === payload.name)) {
      alert(`Attention, the contact is already in contacts list`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const phonebookFilter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
 
})

export default combineReducers({
  phonebookContacts,
  phonebookFilter,
  loading
});


