import INotification from "@/interfaces/notification.interface";
import styles from "@/ui/Notification/Notification.module.scss"
import Image from "next/image";
import { FC } from "react";

const Notification: FC<INotification> = ({ avatar, date, name, tags }) => {
  return <div className={styles.notification}>
    <div className={styles.titles}>
      <h4>Tournament will start soon!</h4>
      <p>{date}</p>
    </div>
    <div className={styles.user}>
      <div className={styles.avatar}>
        {avatar && (
          <Image src={avatar} alt="avatar" width={35} height={35} />
        )}
      </div>
      <div className={styles.user_text}>
        <h4>{name}</h4>
        <div className={styles.tags}>
          {tags.map((el, index) => (
            <div className={styles.tag} key={index}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#595959" />
              </svg>
              <p>{el}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
}

export default Notification;