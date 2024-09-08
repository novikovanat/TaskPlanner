import { statusFilters } from "../constants.js";
import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {status: statusFilters.all},
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterRedusers = filterSlice.reducer;
