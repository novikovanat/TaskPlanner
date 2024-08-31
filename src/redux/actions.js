import { createAction } from "@reduxjs/toolkit";
import prepAddTask from "../utils/prepareAction";

export const addTask = createAction("tasks/addTasks", prepAddTask);

export const deleteTask = createAction("tasks/deleteTasks");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");
