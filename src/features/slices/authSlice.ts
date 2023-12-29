import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IUser, TUser } from "../interfaces";
import { registerUser } from "../services/Routes";

interface IAuthState {
  status: "idle" | "success" | "loading" | "failed";
  error: null | string;
}

const authAdapter = createEntityAdapter({
  selectId: (user: IUser) => user._id,
});

const initialState: IAuthState & EntityState<IUser> =
  authAdapter.getInitialState({
    status: "idle",
    error: null,
  });

export const registerApiUser = createAsyncThunk(
  "/auth/registerApiUser",
  async (initialUser: TUser) => {
    const response = await registerUser(initialUser);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerApiUser.fulfilled, authAdapter.addOne);
  },
});

export default authSlice.reducer;
