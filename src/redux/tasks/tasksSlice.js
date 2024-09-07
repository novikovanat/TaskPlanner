import { createSlice } from "@reduxjs/toolkit";
import { deleteTask, fetchTasks, postTask, toggle } from "../operations.js";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);

        state.error = null;
      })
      .addCase(postTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex((item) => {
          item.id === action.payload.id;
        });
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(toggle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggle.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => {
          item.id === action.payload.id;
        });
        state.items.splise(index, 1, action.payload);
      })
      .addCase(toggle.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const tasksRedusers = tasksSlice.reducer;
