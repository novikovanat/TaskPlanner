export const selectTasks = (state) => state.tasks.items;
export const selectFilterStatus = (state) => state.filter.status;
export const selectLoadingStatus = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;
export const selectTaskByIndex=(state, index)=>state.tasks[index]
