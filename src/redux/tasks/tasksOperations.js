import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66d429855b34bcb9ab3dd0fc.mockapi.io";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = axios.get("/tasks");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postTask = createAsyncThunk(
  "tasks/postTask",
  async (text, thunkAPI) => {
    try {
      const response = axios.post("/tasks", { text });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const response = axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggle = createAsyncThunk(
    "tasks/toggle",
    async(task, thunkAPI)=>{
        try {
            const response = axios.put(`/tasks/${task.id}`,{completed: !task.completed});
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)