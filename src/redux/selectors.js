import {statusFilters} from "./constants"
export const selectTasks = (state) => state.tasks.items;
export const selectFilterStatus = (state) => state.filter.status;
export const selectLoadingStatus = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;
export const selectTaskByIndex=(state, index)=>state.tasks[index];
export const selectVisibleTasks = (state)=> {
    const tasks = selectTasks(state);
    const statusFilter = selectFilterStatus(state);
  
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };
