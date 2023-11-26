import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
  name: "menu",
  initialState: false,
  reducers: {
    toggleMenu: (state, action: PayloadAction<boolean>) =>
      state = action.payload
  }
})

export const { actions, reducer } = menuSlice