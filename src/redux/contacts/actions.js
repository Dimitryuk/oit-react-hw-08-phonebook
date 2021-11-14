import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction("phonebook/delete");
const changeFilter = createAction("phonebook/changeFilter");

export { addContact, deleteContact, changeFilter };
