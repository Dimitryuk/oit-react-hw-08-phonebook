import { useState, useEffect } from "react";
import shortid from "shortid";
import "./App.css";
import ContactForm from "./ContactForm/ContactFormHooks";
import ContactList from "./ContactList/ContactListHooks";

import Filter from "./Filter/FilterHooks";

import React from "react";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("contacts")) ?? initialContacts
    );
  });

  //componentDidMount
  useEffect(() => {
    const contacts = window.localStorage.getItem("contacts");
    if (contacts) {
      setContacts(JSON.parse(contacts));
    } else setContacts(initialContacts);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (data) => {
    if (contacts.some((contact) => contact.name === data.name)) {
      alert(`${data.name} already exists`);
      return;
    }

    setContacts((contacts) => {
      const newContact = {
        id: shortid.generate(),
        ...data,
      };
      return [newContact, ...contacts];
    });
    setName("");
    setNumber("");
  };
  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContact = (contactId) => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };
  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <>
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilterChange={handleFilterChange} />
        <ContactList
          contacts={getVisibleContacts(contacts, filter)}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}
export default App;
