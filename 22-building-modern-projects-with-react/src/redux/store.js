import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./todo/reducer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});