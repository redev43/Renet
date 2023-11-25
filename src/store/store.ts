"use client"

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as navigationUserSlice } from "./navigation_user/navigation_user.slice";
import { reducer as notificationsSlice } from "./notifications/notifications.slice";
import { reducer as avatarSlice } from "./avatar/avatar.slice";

const redusers = combineReducers({
  navigation_user: navigationUserSlice,
  notifications: notificationsSlice,
  avatar: avatarSlice
})

export const store = configureStore({
  reducer: redusers,
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>