// store.ts

import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Provide typed versions of useDispatch and useSelector hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
