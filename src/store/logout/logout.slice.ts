import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const logoutSlice = createSlice({
  name: "logout",
  initialState: false,
  reducers: {
    toggleLogout: (state, action: PayloadAction<boolean>) =>
      state = action.payload
  }
})

export const { actions, reducer } = logoutSlice