import './App.css';
import { Component , useState, useEffect } from 'react';
// import ContactForm from './ContactForm/ContactForm';
import ContactForm from './ContactForm/ContactFormHooks';
import ContactList from './ContactList/ContactListHooks';
import Filter from './Filter/FilterHooks';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  createNewContact = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.some(({ name }) => name === contact.name)) {
      console.log(data);
      alert(`Sorry, ${name} is already in contacts list`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  deleteContact = contactId => {
    const shownContacts = this.state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({ contacts: shownContacts });
  };
  onFilter = filter => {
    console.log('filter', filter);
    this.setState({ filter });
  };
    componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const shownContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.createNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={this.onFilter} />
        <ContactList
          contacts={shownContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
