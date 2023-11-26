"use client"

import { useActions } from "@/hooks/useActions.hook"
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"
import styles from "@/pages/Register/Register.module.scss"
import Link from "next/link"

const Register = () => {
  const dispatch = useActions()
  const avatar = useTypedSelector(state => state.avatar)
  const username = useTypedSelector(state => state.username)

  return <div className={styles.register}>
    <form>
      <h1>Sign Up</h1>
      <p>Enter your data. Also you can upload photo & banner</p>
      <div className={styles.input}>
        <p>Username</p>
        <input type="text" />
      </div>
      <div className={styles.input}>
        <p>Email</p>
        <input type="email" />
      </div>
      <div className={styles.input}>
        <p>Password</p>
        <input type="password" />
      </div>
      <div className={styles.submit}>
        <button>Sign Up</button>
      </div>
      <div className={styles.links}>
        <div className={styles.not_active}>
          <Link href={"/login"}><p>Log In</p></Link>
        </div>
        <div className={styles.active}>
          <Link href={"/register"}><p>Sign Up</p></Link>
        </div>
      </div>
    </form>
  </div>
}

export default Register;