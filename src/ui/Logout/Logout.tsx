import { useActions } from "@/hooks/useActions.hook"
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"
import styles from "@/ui/Logout/Logout.module.scss"

const Logout = () => {
  const logout = useTypedSelector(state => state.logout)
  const dispatch = useActions()

  const onLogout = async () => {
    // Тут отправляешь запрос на logout
  }

  return <div className={styles.logout}>
    <div className={styles.close} onClick={() => dispatch.toggleLogout(!logout)}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33325 5.33325L26.6666 26.6666" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.33325 26.6666L26.6666 5.33325" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <h2>Log Out?</h2>
    <p>Are you sure want to log out?</p>
    <div className={styles.buttons}>
      <div className={styles.button} onClick={() => dispatch.toggleLogout(false)}>
        <button>Stay Logined</button>
      </div>
      <div className={styles.button}>
        <button onClick={() => onLogout()}>Log Out</button>
      </div>
    </div>
  </div>
}

export default Logout;