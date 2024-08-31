import { setStatusFilter } from "../actions.js";
import { statusFilters } from "../constants.js";
import { createReducer } from "@reduxjs/toolkit";

const filterInitialState = {
  status: statusFilters.all,
};
const filtersReduser = createReducer(filterInitialState, (builder) =>
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  })
);

export default filtersReduser;
