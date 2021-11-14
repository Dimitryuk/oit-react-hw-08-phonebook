import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, changeFilter, deleteContact } from "./actions.js";

const phonebookContacts = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
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
