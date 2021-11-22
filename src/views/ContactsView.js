import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactForm from '../ContactForm/ContactFormHooks.js';
import ContactList from '../ContactList/ContactListHooks';
import Filter from '../Filter/FilterHooks';
import Notification from '../Notification/Notification';
import Section from '../Section/Section.js';

// import contactsOperations from '../../redux/contacts/contacts-operations';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Contacts = ({ filter, items, dispatch, loading }) => {
    // useEffect(() => dispatch(contactsOperations.fetchContacts()), []);

  const cleanFilter = filter.toLowerCase();
  const filteredContacts = items
    .filter(item => item.name.toLowerCase().includes(cleanFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <Section title="Phone book">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {loading && <h2>Loading...</h2>}
        {items[0] ? <Filter /> : <Notification message="No contacts added" />}
        {items[0] && !filteredContacts[0] && (
          <Notification message="No contact found" />
        )}
        {filteredContacts[0] && <ContactList contacts={filteredContacts} />}
      </Section>
    </>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  //   items: contactsSelectors.getContactsItems(state),
  //   filter: contactsSelectors.getContactsFilter(state),
  //   loading: contactsSelectors.getContactsLoading(state),
});

export default connect(mapStateToProps)(Contacts);
