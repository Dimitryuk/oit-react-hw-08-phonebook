import s from "./Filter.module.css";
// const Filter = function ({ value, onFilterChange }) {
//   // handleFilter = e => {
//   //    value(e.currentTarget.value)
//   // }
//   return (
//     <div className="FilterWrapper">
//       Find contact by name
//       <label htmlFor="">
//         <input
//           className={s.filter__field}
//           type="text"
//           name="filter"
//           value={value}
//           onChange={onFilterChange}
//         />
//       </label>
//     </div>
//   );
// };

// export default Filter;

import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../redux/contacts/actions";


const Filter = ({ filter, changeFilter }) => {
  return (
    <div className="FilterWrapper">
       Find contact by name
       <label htmlFor="">
        <input
          className={s.filter__field}
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

const mapStateToProps = ({ contacts: { filter } }) => ({ filter: filter });

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);