import s from "./Filter.module.css";
const Filter = function ({ value, onFilterChange }) {
  // handleFilter = e => {
  //    value(e.currentTarget.value)
  // }
  return (
    <div className="FilterWrapper">
      Find contact by name
      <label htmlFor="">
        <input
          className={s.filter__field}
          type="text"
          name="filter"
          value={value}
          onChange={onFilterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
