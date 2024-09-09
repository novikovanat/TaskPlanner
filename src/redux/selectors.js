import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";
export const selectTasks = (state) => state.tasks.items;
export const selectFilterStatus = (state) => state.filter.status;
export const selectLoadingStatus = (state) => {
  state.tasks.isLoading;
};
export const selectError = (state) => state.tasks.error;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilterStatus],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter((task) => !task.completed);
      case statusFilters.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTasksCount = createSelector([selectTasks], (tasks) => {
  return tasks.reduce(
    (accumulator, task) => {
      if (task.completed) {
        accumulator.completed += 1;
      } else {
        accumulator.active += 1;
      }
      return accumulator;
    },
    { active: 0, completed: 0 }
  );
});
