import { configureStore } from "@reduxjs/toolkit";
import ImageSlice from "../slices/ImageSlice";

export const store = configureStore({
  reducer: {
    ImageInfo: ImageSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
