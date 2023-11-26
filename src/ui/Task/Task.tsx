import styles from "@/ui/Task/Task.module.scss"

const Task = () => {
  return <div className={styles.task}>
    <div>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.first_svg}>
        <path d="M9.1419 22.0857C7.46635 21.5868 5.9749 20.6607 4.79393 19.4335C5.2345 18.9114 5.5 18.2367 5.5 17.5001C5.5 15.8432 4.15685 14.5001 2.5 14.5001C2.39977 14.5001 2.3007 14.505 2.203 14.5146C2.0699 13.8639 2 13.1902 2 12.5001C2 11.4548 2.16039 10.4469 2.4579 9.49975C2.47191 9.49995 2.48594 9.50005 2.5 9.50005C4.15685 9.50005 5.5 8.1569 5.5 6.50005C5.5 6.0244 5.3893 5.57465 5.1923 5.17506C6.34875 4.09975 7.76025 3.29501 9.32605 2.86157C9.8222 3.8341 10.8333 4.50007 12 4.50007C13.1667 4.50007 14.1778 3.8341 14.674 2.86157C16.2398 3.29501 17.6512 4.09975 18.8077 5.17506C18.6107 5.57465 18.5 6.0244 18.5 6.50005C18.5 8.1569 19.8432 9.50005 21.5 9.50005C21.5141 9.50005 21.5281 9.49995 21.5421 9.49975C21.8396 10.4469 22 11.4548 22 12.5001C22 13.1902 21.9301 13.8639 21.797 14.5146C21.6993 14.505 21.6002 14.5001 21.5 14.5001C19.8432 14.5001 18.5 15.8432 18.5 17.5001C18.5 18.2367 18.7655 18.9114 19.2061 19.4335C18.0251 20.6607 16.5336 21.5868 14.8581 22.0857C14.4714 20.876 13.338 20.0001 12 20.0001C10.662 20.0001 9.5286 20.876 9.1419 22.0857Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <h4>Programming task</h4>
      <div className={styles.desc}>
        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4.5" r="4" fill="#898989" />
        </svg>
        <p>Create a simple app in 30 minutes</p>
      </div>
    </div>
    <div>
      <h4><span>XP</span> +10</h4>
      <button>Let's Do</button>
    </div>
  </div>
}

export default Task;