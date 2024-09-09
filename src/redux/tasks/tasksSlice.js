import { createSlice } from "@reduxjs/toolkit";
import { deleteTask, fetchTasks, postTask, toggle } from "../operations.js";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(postTask.pending, handlePending)
      .addCase(postTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(postTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex((item) => {
          item.id === action.payload.id;
        });
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(toggle.pending, handlePending)
      .addCase(toggle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })

      .addCase(toggle.rejected, handleRejected);
  },
});

export const tasksRedusers = tasksSlice.reducer;
