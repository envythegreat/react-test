// ** Axios Imports
import { instance } from "../utility/axios";

// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  error: string;
  loading: boolean;
  data?: any;
}

interface LoginData {
  username: string;
  password: string;
  box:string;
  region:string;
}

export const login = createAsyncThunk("auth/login", (data: LoginData) => {
  return instance
    .post(`/authenticate`, {
      ...data,
    })
    .then((response) => response.data)
    .catch(({ response }) => response.data);
});

const initialState: AuthState = {
  error: "",
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.error = "";
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.error = "";
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const authSelector = (state: { authReducer: AuthState }) => state.authReducer;
export default authSlice.reducer;