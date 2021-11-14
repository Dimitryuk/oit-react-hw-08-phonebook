// import React, { useState } from "react";
// import { connect } from "react-redux";
// import s from "./ContactForm.module.css";
// import { store } from "../redux/store";
// import { addContact, deleteContact } from "../redux/contacts/actions";

// const ContactForm = function ({onSubmitContact} ) {
 
 
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const onChangeHandler = (evt) => {
//     const { name, value } = evt.currentTarget;
//     if (name === "name") {
//       setName(value);
//     } else setNumber(value);
//   };
//   const onSubmitHandler = (evt) => {
//     evt.preventDefault();
//     const data = { name, number };
//     onSubmitContact(data)
    
//     setName("");
//     setNumber("");
  
//   };
 
  
//   return (
//     <div>
//       <form onSubmit={onSubmitHandler}>
//         <label>
//           Name
//           <input
//             className={s.input__field}
//             onChange={onChangeHandler}
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>
//         <label>
//           Number
//           <input
//             className={s.input__field}
//             onChange={onChangeHandler}
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <button className={s.form__button} type="submit">
//           Add contact
//         </button>
//       </form>
//     </div>
//   );
// };
// // const mapStateToProps = (state)=>{
// //   return{
// //     contactList:state.contacts
// //   }
// // }
// const mapDispatchToProps = (dispatch)=>{
//   return{
//     onSubmitContact:(data)=>dispatch(addContact(data))
//   }
// }
// export default connect(null, mapDispatchToProps)(ContactForm)


import React, { useState } from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import { addContact } from "../redux/contacts/actions";

import s from "./ContactForm.module.css";




function ContactForm({ phonebookContacts, onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  //onChangeInput
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  //onSubmitForm
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(name, number);

    setName("");
    setNumber("");
  };

  return (
    <div>
           <form onSubmit={handleSubmit}>
             <label>
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
              Add contact
            </button>
          </form>
        </div>
  );
}

const mapStateToProps = ({ contacts: { phonebookContacts } }) =>
  phonebookContacts;

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);