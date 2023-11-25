import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const navigationUserSlice = createSlice({
  name: "navigation_user",
  initialState: false,
  reducers: {
    toggleNavigation: (state, action: PayloadAction<boolean>) =>
      state = action.payload
  }
})

export const { actions, reducer } = navigationUserSlice