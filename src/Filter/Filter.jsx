import { Component } from 'react';
import s from './Filter.module.css';

export default class Filter extends Component {
  handleFilter = e => {
    this.props.onFilter(e.currentTarget.value);
  };
  render() {
    const { filter } = this.props;
    // console.log(this.props);
    return (
      <div className="FilterWrapper">
        Find contact by name
        <label htmlFor="">
          <input
            className={s.filter__field}
            type="text"
            name="filter"
            value={filter}
            onChange={this.handleFilter}
          />
        </label>
      </div>
    );
  }
}
