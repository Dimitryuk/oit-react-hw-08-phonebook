import React, { useState } from "react";
import s from "./ContactForm.module.css";
const ContactForm = function ({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const onChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    if (name === "name") {
      setName(value);
    } else setNumber(value);
  };
  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    const data = { name, number };
    onSubmit(data);
    setName("");
    setNumber("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          Name
          <input
            className={s.input__field}
            onChange={onChangeHandler}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            className={s.input__field}
            onChange={onChangeHandler}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.form__button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
