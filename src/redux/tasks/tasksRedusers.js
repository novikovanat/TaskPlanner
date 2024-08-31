import { toggleCompleted, deleteTask, addTask } from "../actions.js";
import { createReducer } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 5, text: "Learn Redux Toolkit", completed: false },
  { id: 4, text: "Build task planner", completed: false },
];
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
