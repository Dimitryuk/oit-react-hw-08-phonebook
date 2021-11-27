import React, { useState } from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts/contacts-operations';
import { getContacts } from '../redux/selectors';

import s from './ContactForm.module.css';
import {
  BsTelephonePlusFill,
  BsFillPersonPlusFill,
  BsFillFileEarmarkPersonFill,
} from 'react-icons/bs';
console.log(addContact);
function ContactForm({ phonebookContacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  //onChangeInput
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  //onSubmitForm
  const handleSubmit = e => {
    e.preventDefault();
    const cont = {
      name: name,
      phone: number,
    };
    if (contacts.some(({ name }) => name === cont.name)) {
      return alert(`Attention, the contact is already in contacts list`);
    }
    // dispatch(addContact(cont))
    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <BsFillFileEarmarkPersonFill style={{ marginRight: '10px' }} />
          Name
          <input
            className={s.input__field}
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <BsTelephonePlusFill style={{ marginRight: '10px' }} />
          Number
          <input
            className={s.input__field}
            onChange={handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.form__button} type="submit">
          <BsFillPersonPlusFill style={{ marginRight: '10px' }} />
          Add contact
        </button>
      </form>
    </div>
  );
}

// const mapStateToProps = ({ contacts: { phonebookContacts } }) =>
//   phonebookContacts;

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
