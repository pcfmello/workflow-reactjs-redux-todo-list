import React from "react";
import { connect } from "react-redux";
import * as actions from "../../reducers/visibility-filter/actions";
import { setVisibilityFilter } from "../../reducers/visibility-filter/action-creators";
import FilterLink from "./filter-link";

const Filter = ({ activeFilter, handleFilter }) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map(filter => (
      <FilterLink
        key={filter.action}
        action={filter.action}
        activeFilter={activeFilter}
        onClick={handleFilter(filter.action)}
      >
        {filter.label}
      </FilterLink>
    ))}
  </div>
);

const filterItems = [
  { label: "Todos", action: actions.SHOW_ALL },
  { label: "Finalizados", action: actions.SHOW_COMPLETED },
  { label: "À fazer", action: actions.SHOW_ACTIVE }
];

const mapStateToProps = state => ({
  activeFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  handleFilter: filter => e => {
    e.preventDefault();
    console.log(filter);
    dispatch(setVisibilityFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
