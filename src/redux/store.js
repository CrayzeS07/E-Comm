import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducer/card";

export const Store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
