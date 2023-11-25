"use client"

import { useActions } from "@/hooks/useActions.hook";
import { useTypedSelector } from "@/hooks/useTypedSelector.hook";
import styles from "@/ui/Navigation/Navigation.module.scss"
import Image from "next/image";
import UserNavigationMenu from "../UserNavigationMenu/UserNavigationMenu";
import Notifications from "../Notifications/Notifications";
import Logout from "../Logout/Logout";

const Navigation = () => {
  const navigation_user = useTypedSelector(state => state.navigation_user)
  const notifications = useTypedSelector(state => state.notifications)
  const logout = useTypedSelector(state => state.logout)
  const dispatch = useActions()

  return <nav className={styles.navigation}>
    {navigation_user && (
      <UserNavigationMenu />
    )}
    {notifications && (
      <Notifications />
    )}
    {logout && (
      <Logout />
    )}
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.logo}>
          <Image priority src={"/navigation/logo.png"} alt="logo" width={40} height={40} />
        </div>
      </div>
      <div className={styles.col}>
        <div className={styles.count}>
          <p>54</p>
          <div className={styles.vector}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_12_2811)">
                <path d="M0 5.67359C0 2.91216 2.23858 0.673584 5 0.673584H7.47628C8.80263 0.673584 10.0746 1.20058 11.0124 2.1386L15.3937 6.52129C15.8652 6.99289 16.13 7.63242 16.13 8.29926C16.13 10.5365 13.4278 11.66 11.8417 10.0822L10.7535 8.99978C8.76666 7.02348 5.38175 8.42744 5.37698 11.2298L5.36092 20.652C5.3584 22.1306 4.15905 23.3279 2.68046 23.3279C1.20008 23.3279 0 22.1278 0 20.6474V5.67359Z" fill="#3AAFA9" />
                <path d="M24 18.3277C24 21.0891 21.7614 23.3277 19 23.3277H16.5262C15.1996 23.3277 13.9274 22.8005 12.9896 21.8621L8.60949 17.4793C8.13794 17.0075 7.87305 16.3677 7.87305 15.7006C7.87305 13.4622 10.5765 12.338 12.1637 13.9165L13.2494 14.9962C15.2363 16.9723 18.621 15.5681 18.6257 12.7658L18.6413 3.34731C18.6437 1.86926 19.8426 0.672363 21.3206 0.672363C22.8004 0.672363 24 1.87196 24 3.35174V18.3277Z" fill="#3AAFA9" />
              </g>
              <defs>
                <clipPath id="clip0_12_2811">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.notifications} onClick={() => {
          dispatch.toggleNotifications(!notifications)
          dispatch.toggleLogout(false)
        }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.6665 25.3333V12C6.6665 6.84529 10.8452 2.66663 15.9998 2.66663C21.1545 2.66663 25.3332 6.84529 25.3332 12V25.3333M2.6665 25.3333H29.3332" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.9998 29.3334C17.8408 29.3334 19.3332 27.841 19.3332 26V25.3334H12.6665V26C12.6665 27.841 14.1589 29.3334 15.9998 29.3334Z" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.8764 15.8367C1.8764 15.9959 2.00928 16.125 2.17321 16.125L15.8259 16.125C15.9898 16.125 16.1227 15.9959 16.1227 15.8367V15.4924C16.1295 15.3886 16.1434 14.8708 15.8021 14.2983C15.5868 13.9374 15.2744 13.6255 14.8736 13.3715C14.3886 13.0642 13.7717 12.8415 13.0255 12.7074C13.02 12.7067 12.4667 12.6334 11.8999 12.4886C10.9129 12.2365 10.8266 12.0134 10.826 12.0112C10.8202 11.9892 10.8118 11.968 10.8011 11.9481C10.793 11.9064 10.773 11.7498 10.8112 11.3301C10.908 10.2641 11.4798 9.63412 11.9393 9.12795C12.0842 8.96831 12.221 8.81752 12.3264 8.66966C12.781 8.03179 12.8232 7.30646 12.8251 7.2615C12.8251 7.17041 12.8147 7.09552 12.7923 7.02611C12.7476 6.88721 12.6637 6.80066 12.6024 6.73747L12.602 6.73702C12.5865 6.72112 12.5719 6.70605 12.56 6.69221C12.5555 6.68692 12.5434 6.67294 12.5544 6.60112C12.5947 6.33679 12.6189 6.11546 12.6306 5.9046C12.6513 5.52892 12.6674 4.9671 12.5705 4.42031C12.5586 4.32694 12.538 4.22831 12.506 4.11082C12.4037 3.7343 12.2392 3.41239 12.0107 3.14671C11.9714 3.10396 11.0159 2.0973 8.24205 1.89075C7.8585 1.8622 7.47934 1.87758 7.1061 1.89666C7.01614 1.9011 6.89295 1.90721 6.77768 1.93708C6.49129 2.01126 6.41486 2.19279 6.3948 2.29438C6.36154 2.46265 6.42 2.59356 6.45866 2.68019V2.6802V2.68021C6.46429 2.69277 6.47123 2.7083 6.45911 2.74874C6.39473 2.84845 6.29344 2.93835 6.19016 3.02352C6.16031 3.04889 5.46476 3.64863 5.42651 4.43209C5.32339 5.02792 5.33119 5.95627 5.45314 6.5979C5.46023 6.63334 5.47069 6.6858 5.4537 6.72124C5.32256 6.83876 5.17391 6.97196 5.17429 7.2759C5.17586 7.30646 5.21805 8.03179 5.6727 8.66966C5.778 8.81741 5.91473 8.96809 6.05951 9.12761L6.05985 9.12795V9.12799C6.5193 9.63416 7.09106 10.2641 7.18793 11.3301C7.22603 11.7498 7.20608 11.9064 7.19801 11.948C7.18725 11.9679 7.17885 11.9891 7.17308 12.0112C7.17248 12.0133 7.08653 12.2358 6.10395 12.4873C5.5371 12.6325 4.97906 12.7067 4.96241 12.7091C4.23728 12.8315 3.62414 13.0486 3.14007 13.3543C2.74055 13.6066 2.42758 13.9191 2.20984 14.2829C1.86194 14.8642 1.87135 15.3936 1.8764 15.4903V15.8367Z" stroke="#898989" strokeWidth="0.833333" strokeLinejoin="round" />
            </svg>
          </div>
          <h4>User_123</h4>
          <div className={styles.down} onClick={() => {
            dispatch.toggleNavigation(!navigation_user)
            dispatch.toggleLogout(false)
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M24 12L16 20L8 12" stroke="#AAAAAA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navigation;