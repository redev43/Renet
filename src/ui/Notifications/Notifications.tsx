"use client"

import styles from "@/ui/Notifications/Notifications.module.scss"
import Notification from "../Notification/Notification"

const Notifications = () => {
  const notifications = [
    {
      date: "November 21, 21:00",
      name: "Apex Legends",
      tags: ["duo", "400 slots"],
      avatar: "/avatars/avatar.png"
    },
    {
      date: "November 21, 21:00",
      name: "Apex Legends",
      tags: ["duo", "400 slots"]
    }
  ]

  return <div className={styles.notifications}>
    <h3>Notifications</h3>
    <div className={styles.content}>
      {notifications.length == 0 ? (
        <>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33325 31.6666V14.9999C8.33325 8.55659 13.5566 3.33325 19.9999 3.33325C26.4433 3.33325 31.6666 8.55659 31.6666 14.9999V31.6666M3.33325 31.6666H36.6666" stroke="#AAAAAA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.9999 36.6667C22.3011 36.6667 24.1666 34.8012 24.1666 32.5001V31.6667H15.8333V32.5001C15.8333 34.8012 17.6988 36.6667 19.9999 36.6667Z" stroke="#AAAAAA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h4>No Notifications</h4>
          <p>Your recent notifications will show up here.</p>
        </>
      ) : (
        <>

          {notifications.map((el, index) => (
            <Notification date={el.date} name={el.name} tags={el.tags} avatar={el.avatar} key={index} />
          ))}

        </>
      )}
    </div>
  </div>
}

export default Notifications;