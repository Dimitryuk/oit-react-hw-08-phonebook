// import React from "react";
// import PropTypes from "prop-types";
// import s from "./ContactList.module.css";

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <div>
//       <ol className={s.contacts__list}>
//         {contacts.map(({ name, number, id }) => (
//           <li key={id} className="ContactList_item">
//             {name} {number}
//             <button
//               className={s.contacts__button}
//               type="button"
//               onClick={() => onDeleteContact(id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state)=>({

// })

// export default ContactList;

// import React from "react";
// import { connect } from "react-redux";
// import { deleteContact } from "../redux/contacts/actions";

// import s from "./ContactList.module.css";

// const ContactList = ({ contacts, deleteContact }) => {
//   return (
//     <div>
//           <ol className={s.contacts__list}>
//              {contacts.map(({ name, number, id }) => (
//               <li key={id} className="ContactList_item">
//                 {name} {number}
//                 <button
//                   className={s.contacts__button}
//                   type="button"
//                   onClick={() => deleteContact(id)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </div>
//   );
// };

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const mapStateToProps = ({
//   contacts: { phonebookContacts, phonebookFilter },
// }) => ({
//   contacts: getVisibleContacts(phonebookContacts, phonebookFilter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../redux/contacts/actions";
// import Button from "@mui/material/Button";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ol className={s.contacts__list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className="ContactList_item">
            {name} {number}
            <button
              className={s.contacts__button}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
const mapStateToProps = ({
  contacts: { phonebookContacts, phonebookFilter },
}) => ({
  contacts: getVisibleContacts(phonebookContacts, phonebookFilter),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
