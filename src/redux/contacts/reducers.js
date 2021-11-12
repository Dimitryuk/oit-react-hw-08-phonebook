import { addContact, deleteContact } from "./actions";
import { combineReducers } from "redux";

const initialContacts  = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
export const contactList = (state=initialContacts, action) => {
    switch(action.type){
      case "contact/add":return[...state, action.payload]
      break
      case "contact/delete":return state.filter(contact => contact.id !== action.payload.id)
      break
      default:
        return state
    }
    return state
}

const contactsFilter = (state="", action)=>{
  switch(action.type){
    case "contact/filter":
      return (state = action.payload.target.value)
      default:
        return state 
  }
}

export const contactsReducer = combineReducers({
  contacts: contactList,
  filter: contactsFilter
})