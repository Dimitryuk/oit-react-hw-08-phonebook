import s from "./Filter.module.css";

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
