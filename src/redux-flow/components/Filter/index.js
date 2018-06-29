import React from "react";
import { connect } from "react-redux";

import RaisedButton from "material-ui/RaisedButton";

import * as actions from "../../reducers/visibility-filter/actions";
import { setVisibilityFilter } from "../../reducers/visibility-filter/action-creators";
import FilterLink from "./filter-link";

const Filter = ({ activeFilter, handleFilter }) => (
  <div style={{ display: "flex", marginTop: 16 }}>
    {filterItems.map(filter => (
      <RaisedButton
        key={filter.action}
        label={filter.label}
        primary={true}
        disabled={filter.action === activeFilter}
        onClick={handleFilter(filter.action)}
        style={{ flex: "auto" }}
      />
      // <FilterLink
      //   key={filter.action}
      //   action={filter.action}
      //   activeFilter={activeFilter}
      //   onClick={handleFilter(filter.action)}
      // >
      //   {filter.label}
      // </FilterLink>
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
