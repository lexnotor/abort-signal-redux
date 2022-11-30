import { createAsyncThunk } from "@reduxjs/toolkit";
import { listAbortControllers } from "./listAbortControllers";

export const addTask = createAsyncThunk("todo/addTask", async (_, thunkAPI) => {
  const controller = new AbortController();
  try {
    listAbortControllers.push({ id: thunkAPI.requestId, controller });
    return new Promise((resolve, reject) => {
      const timerId = setTimeout(() => {
        resolve("resolved");
      }, 10000);
      controller.signal.onabort = () => {
        clearTimeout(timerId);
        reject("Aborted");
      };
    });
  } catch (err) {
    thunkAPI.rejectWithValue(`Erreur=> ${err.message}`);
  }
});
