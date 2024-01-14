import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;

// Define the RootState type
export type RootState = ReturnType<typeof rootReducer>;
