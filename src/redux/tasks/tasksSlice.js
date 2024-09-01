import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import prepAddTask from "../../utils/prepareAction";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: true },
    { id: 3, text: "Discover Redux", completed: true },
    { id: 5, text: "Learn Redux Toolkit", completed: true },
    { id: 4, text: "Build task planner", completed: true },
  ],
  reducers:
    // { addTodo: {
    //       reducer: (state, action) => {
    //         state.push(action.payload)
    //       },
    //       prepare: (text) => {
    //         const id = nanoid()
    //         const completed =  false}
    //       },
    { addTask: {
      reducer:(state, action) => {
        state.push(action.payload);
      },
      prepare: (text)=> {
        const id = nanoid()
        const completed =  false;
        return { payload: { id, text, completed }}
        },
    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
}});

export const tasksRedusers = tasksSlice.reducer;
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
