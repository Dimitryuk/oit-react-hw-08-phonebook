import { createStore } from "redux";
import { contactsReducer } from "./contacts/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(contactsReducer, composeWithDevTools());