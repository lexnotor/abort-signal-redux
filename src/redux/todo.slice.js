import { createSlice } from "@reduxjs/toolkit";
import { abortContorller, removeAbortController } from "./listAbortControllers";
import { addTask } from "./todo.service";

const todoSlice = createSlice({
  initialState: {
    tasks: [],
  },
  name: "todo",
  reducers: {
    cancelTask: (_, action) => {
      abortContorller(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTask.pending, (state, action) => {
        state.tasks.push({
          id: action.meta.requestId,
          message: action.meta.arg,
        });
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          (item) => item.id != action.meta.requestId
        );
        removeAbortController(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.tasks = state.tasks.filter(
          (item) => item.id != action.meta.requestId
        );
        removeAbortController(action.meta.requestId);
      });
  },
});

export const { cancelTask } = todoSlice.actions;
export default todoSlice;
