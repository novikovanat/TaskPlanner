import { toggleCompleted, deleteTask, addTask } from "../actions.js";
import { createReducer } from "@reduxjs/toolkit";

const tasksInitialState = [];
const tasksReduser = createReducer(tasksInitialState, (builder) =>
  builder
    .addCase(addTask.type, (state, action) => {
      state.push(action.payload);
    })

    .addCase(deleteTask.type, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    })
    .addCase(toggleCompleted.type, (state, action) => {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    })
);
export default tasksReduser;
