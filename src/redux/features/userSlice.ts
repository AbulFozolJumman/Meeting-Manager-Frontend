import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  role: "user" | "admin";
  email: string;
  name: string;
  address: string;
  phone: string;
}

type IAuthState = {
  user: null | IUser;
  token: null | string;
};

const initialState: IAuthState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, setUser, logout } = userSlice.actions;
export default userSlice.reducer;
