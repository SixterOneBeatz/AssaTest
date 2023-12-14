import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { globalApi } from "../services/mockApiService";
import tasksReducer from "./globalSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    [globalApi.reducerPath]: globalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApi.middleware),
});

setupListeners(store.dispatch);
 
export type RootState = ReturnType<typeof store.getState>

export default store;