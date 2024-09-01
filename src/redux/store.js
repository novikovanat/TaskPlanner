import { configureStore } from "@reduxjs/toolkit";
import {filterRedusers} from "./filters/filtersSlice";
import {tasksRedusers} from "./tasks/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksRedusers,
    filter: filterRedusers,
  },
});

export default store;
