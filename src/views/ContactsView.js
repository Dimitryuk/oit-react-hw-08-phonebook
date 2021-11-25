import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactFormHooks';
import Filter from '../Filter/FilterHooks';
import ContactList from '../ContactList/ContactListHooks';
import { fetchContacts } from '../redux/contacts/contacts-operations';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
