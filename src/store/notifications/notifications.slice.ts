import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: false,
  reducers: {
    toggleNotifications: (state, action: PayloadAction<boolean>) =>
      state = action.payload
  }
})

export const { actions, reducer } = notificationsSlice