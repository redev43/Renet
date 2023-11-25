import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as navigationUserSlice } from "./navigation_user/navigation_user.slice";
import { reducer as notificationsSlice } from "./notifications/notifications.slice";
import { reducer as avatarSlice } from "./avatar/avatar.slice";
import { reducer as logoutSlice } from "./logout/logout.slice";
import { reducer as usernameSlice } from "./username/username.slice";

const redusers = combineReducers({
  navigation_user: navigationUserSlice,
  notifications: notificationsSlice,
  avatar: avatarSlice,
  logout: logoutSlice,
  username: usernameSlice
})

export const store = configureStore({
  reducer: redusers,
})

export type RootState = ReturnType<typeof store.getState>