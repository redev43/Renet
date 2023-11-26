"use client"

import { useActions } from "@/hooks/useActions.hook";
import { useTypedSelector } from "@/hooks/useTypedSelector.hook";
import styles from "@/ui/Menu/Menu.module.scss"
import Logout from "../Logout/Logout";
import Link from "next/link";

const Menu = () => {
  const logout = useTypedSelector(state => state.logout)
  const dispatch = useActions()

  return <div className={styles.menu}>
    {logout && (
      <Logout />
    )}
    <h2>Menu</h2>
    <div className={styles.content}>
      <div className={styles.count}>
        <p>54</p>
        <div className={styles.vector}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_12_2811)">
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
      <ul>
        <li>
          <Link href={"/profile"}>Settings</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.1419 21.5857C7.46635 21.0868 5.9749 20.1607 4.79393 18.9335C5.2345 18.4114 5.5 17.7367 5.5 17.0001C5.5 15.3432 4.15685 14.0001 2.5 14.0001C2.39977 14.0001 2.3007 14.005 2.203 14.0146C2.0699 13.3639 2 12.6902 2 12.0001C2 10.9548 2.16039 9.9469 2.4579 8.99975C2.47191 8.99995 2.48594 9.00005 2.5 9.00005C4.15685 9.00005 5.5 7.6569 5.5 6.00005C5.5 5.5244 5.3893 5.07465 5.1923 4.67506C6.34875 3.59975 7.76025 2.79501 9.32605 2.36157C9.8222 3.3341 10.8333 4.00007 12 4.00007C13.1667 4.00007 14.1778 3.3341 14.674 2.36157C16.2398 2.79501 17.6512 3.59975 18.8077 4.67506C18.6107 5.07465 18.5 5.5244 18.5 6.00005C18.5 7.6569 19.8432 9.00005 21.5 9.00005C21.5141 9.00005 21.5281 8.99995 21.5421 8.99975C21.8396 9.9469 22 10.9548 22 12.0001C22 12.6902 21.9301 13.3639 21.797 14.0146C21.6993 14.005 21.6002 14.0001 21.5 14.0001C19.8432 14.0001 18.5 15.3432 18.5 17.0001C18.5 17.7367 18.7655 18.4114 19.2061 18.9335C18.0251 20.1607 16.5336 21.0868 14.8581 21.5857C14.4714 20.376 13.338 19.5001 12 19.5001C10.662 19.5001 9.5286 20.376 9.1419 21.5857Z" stroke="#AAAAAA" strokeLinejoin="round" />
            <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#AAAAAA" strokeLinejoin="round" />
          </svg>
        </li>
        <li onClick={() => dispatch.toggleLogout(!logout)}>
          Logout
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9958 3H3V21H12" stroke="#AAAAAA" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.5 16.5L21 12L16.5 7.5" stroke="#AAAAAA" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 11.9958H21" stroke="#AAAAAA" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
      </ul>
    </div>
  </div>
}

export default Menu;