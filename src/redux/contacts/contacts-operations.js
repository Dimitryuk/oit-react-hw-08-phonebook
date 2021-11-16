import axios from "axios";
import { addContactRequest, addContactSuccess, addContactError }
    from './actions'
axios.defaults.baseURL =
    "https://6192861ad3ae6d0017da8170.mockapi.io/api/v1/"

export const addContact = (name, number) => dispatch => {
  const contact = { name, number }
  dispatch(addContactRequest())
    axios.post("/contacts", contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)))
}

