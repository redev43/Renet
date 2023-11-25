import { useActions } from "@/hooks/useActions.hook"
import { useTypedSelector } from "@/hooks/useTypedSelector.hook"
import styles from "@/ui/AvatarChange/AvatarChange.module.scss"

const AvatarChange = () => {
  const avatar = useTypedSelector(state => state.avatar)
  const dispatch = useActions()

  return <div className={styles.avatar_change}>
    <div className={styles.close} onClick={() => dispatch.toggleAvatar(!avatar)}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33325 5.33325L26.6666 26.6666" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.33325 26.6666L26.6666 5.33325" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <h2>Changing Avatar</h2>
    <p>You can select avatar from your files or Remove it.</p>
    <div className={styles.buttons}>
      <div className={styles.button}>
        <button>Select Image</button>
      </div>
      <div className={styles.button}>
        <button>Remove Avatar</button>
      </div>
    </div>
  </div>
}

export default AvatarChange;