import IPost from "@/interfaces/post.interface";
import styles from "@/ui/Post/Post.module.scss"
import Image from "next/image";
import { FC } from "react";

const Post: FC<IPost> = ({ date, image, likes, tags, user }) => {
  return <div className={styles.post}>
    <div className={styles.top}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <Image src={user.avatar} alt="avatar" width={50} height={50} />
        </div>
        <h4>{user.name}</h4>
      </div>
      <div className={styles.right}>
        <div className={styles.date}>
          <p>{date}</p>
        </div>
        <div className={styles.menu}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12.5C21.3807 12.5 22.5 11.3807 22.5 10C22.5 8.61929 21.3807 7.5 20 7.5C18.6193 7.5 17.5 8.61929 17.5 10C17.5 11.3807 18.6193 12.5 20 12.5Z" fill="white" />
            <path d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20C22.5 18.6193 21.3807 17.5 20 17.5C18.6193 17.5 17.5 18.6193 17.5 20C17.5 21.3807 18.6193 22.5 20 22.5Z" fill="white" />
            <path d="M20 31.6666C21.3807 31.6666 22.5 30.5473 22.5 29.1666C22.5 27.7859 21.3807 26.6666 20 26.6666C18.6193 26.6666 17.5 27.7859 17.5 29.1666C17.5 30.5473 18.6193 31.6666 20 31.6666Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
    <div className={styles.image}>
      <Image src={image} alt="post" width={978} height={552} />
    </div>
    <div className={styles.bottom}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h4>{likes} likes</h4>
          <div className={styles.tags}>
            {tags.map((el, index) => (
              <div className={styles.tag} key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                  <circle cx="4" cy="4.5" r="4" fill="#595959" />
                </svg>
                <p>{el}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.col}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M36.6668 10C36.6668 7.23858 34.4283 5 31.6668 5H8.3335C5.57207 5 3.3335 7.23858 3.3335 10V26.25C3.3335 28.3211 5.01243 30 7.0835 30H9.24197C10.1209 30 10.8335 30.7126 10.8335 31.5915V31.5915C10.8335 32.7746 12.0786 33.5441 13.1368 33.015L18.1111 30.5279C18.8054 30.1807 19.5709 30 20.3472 30H31.6668C34.4283 30 36.6668 27.7614 36.6668 25V10Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.6665 16.25V18.75" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 16.25V18.75" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28.3335 16.25V18.75" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 34.3333V6H30.6667V34.3333L19.8333 29.1061L9 34.3333Z" stroke="white" strokeWidth="4" strokeLinejoin="round" />
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5002 6.66675C7.43755 6.66675 3.3335 10.7708 3.3335 15.8334C3.3335 25.0001 14.1668 33.3334 20.0002 35.2719C25.8335 33.3334 36.6668 25.0001 36.6668 15.8334C36.6668 10.7708 32.5627 6.66675 27.5002 6.66675C24.3999 6.66675 21.6591 8.20583 20.0002 10.5616C18.3412 8.20583 15.6004 6.66675 12.5002 6.66675Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  </div>
}

export default Post;