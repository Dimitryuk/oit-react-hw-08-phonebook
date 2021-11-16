import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContactSuccess, changeFilter, deleteContact } from "./actions.js";

const phonebookContacts = createReducer([], {
  [addContactSuccess]: (state, { payload }) => {
    console.log(payload);
    if (state.some(({ name }) => name === payload.name)) {
      alert(`Attention, the contact is already in contacts list`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const phonebookFilter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
export default combineReducers({
  phonebookContacts,
  phonebookFilter,
});
