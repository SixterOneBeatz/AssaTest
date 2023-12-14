import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INITIAL_TASKS } from "../shared/constants";
import { GlobalState } from "../models/GlobalState";
import { Task } from "../models/Task";

const initialState: GlobalState = {
  tasks: INITIAL_TASKS,
};

export const globalSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    resetTasks: (state) => {
      state.tasks = INITIAL_TASKS;
    },
  },
});

export const { addTask, resetTasks } = globalSlice.actions;

export default globalSlice.reducer;
