import axios from 'axios';

axios.defaults.baseURL = '"https://connections-api.herokuapp.com';

export async function fetchContactsAPI() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContactAPI(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}
export async function deleteContactsAPI(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function userRegister(credentials) {
  const { data } = await axios.post("users/signup", credentials);
  return data;
}

export async function userLogin() {
  const { data } = await axios.post("users/login");
  return data;
}