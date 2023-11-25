import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const avatarSlice = createSlice({
  name: "avatar",
  initialState: false,
  reducers: {
    toggleAvatar: (state, action: PayloadAction<boolean>) =>
      state = action.payload
  }
})

export const { actions, reducer } = avatarSlice