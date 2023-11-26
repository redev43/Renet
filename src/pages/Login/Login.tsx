"use client"

import styles from "@/pages/Login/Login.module.scss"
import Link from "next/link"
import { useState } from "react"

const Login = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false)

  return <div className={styles.login}>
    <form>
      <h1>Log In</h1>
      <p>Enter your data</p>
      <div className={styles.input}>
        <p>Username or Email</p>
        <input type="text" />
      </div>
      <div className={styles.input}>
        <p>Password</p>
        <input type="password" />
      </div>
      <div className={styles.remember}>
        <h4>Remember me</h4>
        <div className={styles.checkbox} onClick={() => setCheckbox(!checkbox)}>
          <div className={checkbox ? styles.circle_active : styles.circle}></div>
        </div>
      </div>
      <div className={styles.submit}>
        <button>Log In</button>
      </div>
      <div className={styles.links}>
        <div className={styles.active}>
          <Link href={"/login"}><p className={styles.not_active}>Log In</p></Link>
        </div>
        <div className={styles.not_active}>
          <Link href={"/register"}><p>Sign Up</p></Link>
        </div>
      </div>
    </form>
  </div>
}

export default Login;