"use client"

import { actions as avatarSlice } from "@/store/avatar/avatar.slice"
import { actions as navigation_user } from "@/store/navigation_user/navigation_user.slice"
import { actions as notificationsSlice } from "@/store/notifications/notifications.slice"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

const rootActions = {
  ...navigation_user,
  ...notificationsSlice,
  ...avatarSlice
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}