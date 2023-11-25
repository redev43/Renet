import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const usernameSlice = createSlice({
  name: "username",
  initialState: false,
  reducers: {
    toggleUsername: (state, action: PayloadAction<boolean>) =>
      state = action.payload
  }
})

export const { actions, reducer } = usernameSlice