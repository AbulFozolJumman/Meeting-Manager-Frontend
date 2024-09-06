import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  userId: string;
  role: "user" | "admin";
  iat: number;
  exp: number;
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
