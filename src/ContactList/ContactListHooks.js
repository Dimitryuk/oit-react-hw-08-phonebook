import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ol className={s.contacts__list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className="ContactList_item">
            {name} {number}
            <button
              className={s.contacts__button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
