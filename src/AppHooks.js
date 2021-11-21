import './App.css';
import AppBar from './AppBar';
import ContactForm from './ContactForm/ContactFormHooks';
import ContactList from './ContactList/ContactListHooks';

import Filter from './Filter/FilterHooks';

function App() {
  return (
    <>
      <div className="App">
        <h1>Phonebook</h1>
        <AppBar />
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}

export default App;
