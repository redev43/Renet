import { useActions } from "@/hooks/useActions.hook";
import { useTypedSelector } from "@/hooks/useTypedSelector.hook";
import IUsernameForm from "@/interfaces/forms/username.form";
import styles from "@/ui/ChangeUsername/ChangeUsername.module.scss"
import { SubmitHandler, useForm } from "react-hook-form";

const ChangeUsername = () => {
  const username = useTypedSelector(state => state.username)
  const dispatch = useActions()

  const {
    register,
    handleSubmit
  } = useForm<IUsernameForm>()

  const onChange: SubmitHandler<IUsernameForm> = async data => {
    // Тут ты пишешь запрос на свой сервер. В data хранится username пользователя
  }

  return <div className={styles.change_username}>
    <form onSubmit={handleSubmit(onChange)}>
      <div className={styles.close} onClick={() => dispatch.toggleUsername(!username)}>
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33325 5.33325L26.6666 26.6666" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.33325 26.6666L26.6666 5.33325" stroke="#AAAAAA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h2>Change your nickname</h2>
      <p>Write the desired nickname</p>
      <div className={styles.input}>
        <input type="text" placeholder="Type something..." {...register("username")} />
      </div>
      <div className={styles.button}>
        <button>Change</button>
      </div>
    </form>
  </div>
}

export default ChangeUsername;