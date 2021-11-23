import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    // addContactRequest, addContactSuccess, addContactError,
    // deleteContactRequest, deleteContactSuccess, deleteContactError,
    // fetchContactRequest, fetchContactSuccess, fetchContactError
}
    from './actions'
import {fetchContactsAPI, addContactAPI,deleteContactsAPI} from '../../services/api'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const fetchContacts = () => dispatch => {
//     dispatch(fetchContactRequest())
//     axios.get("/contacts")
//         .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch(error => dispatch(fetchContactError(error)))
    
//     }

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await fetchContactsAPI();
    return contacts;
  }
);

// export const addContact = (name, number) => dispatch => {
//   const contact = { name, number }
//   dispatch(addContactRequest())
//     axios.post("/contacts", contact)
//         .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)))
// }

export const addContact = createAsyncThunk(
  "contacts/сontactsGlobal",
  async (cont) => {
    const contacts = await addContactAPI(cont);
    return contacts;
  }
);

// export const deleteContact = id => dispatch => {
//     dispatch(deleteContactRequest())
//     axios.delete(`/contacts/${id}`).then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error =>dispatch(deleteContactError(error)))
// }
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await deleteContactsAPI(id);
    return id;
  }
);