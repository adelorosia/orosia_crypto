import {
  EntityState,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IUser } from "../interfaces";

const authAdapter = createEntityAdapter({
  selectId: (user: IUser) => user._id,
});

const initialState: EntityState<IUser> = authAdapter.getInitialState({});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
