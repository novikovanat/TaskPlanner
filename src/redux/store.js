import { configureStore } from "@reduxjs/toolkit";
import filtersReduser from "./filters/filtersRedusers";
import tasksReduser from "./tasks/tasksRedusers";

const store = configureStore({
  reducer: {
    tasks: tasksReduser,
    filter: filtersReduser,
  },
});

export default store;
