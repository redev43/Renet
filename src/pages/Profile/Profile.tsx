"use client"

import { useActions } from "@/hooks/useActions.hook";
import { useTypedSelector } from "@/hooks/useTypedSelector.hook";
import IPost from "@/interfaces/post.interface";
import styles from "@/pages/Profile/Profile.module.scss"
import AvatarChange from "@/ui/AvatarChange/AvatarChange";
import Post from "@/ui/Post/Post";
import Skill from "@/ui/Skill/Skill";
import Task from "@/ui/Task/Task";
import { useState } from "react";

const Profile = () => {
  const avatar = useTypedSelector(state => state.avatar)
  const dispatch = useActions()
  const [component, setComponent] = useState<string>("main")
  const [checkbox, setCheckbox] = useState<boolean>(false)
  const [skills, setSkills] = useState<boolean>(false)

  const posts: Array<IPost> = [
    {
      user: {
        avatar: "/avatars/avatar.png",
        name: "Maffin_123"
      },
      date: "November 21, 21:00",
      image: "/posts/post.png",
      likes: 215,
      tags: ["Спорт", "Отдых"]
    },
    {
      user: {
        avatar: "/avatars/avatar.png",
        name: "Maffin_123"
      },
      date: "November 21, 21:00",
      image: "/posts/post.png",
      likes: 215,
      tags: ["Спорт", "Отдых"]
    },
    {
      user: {
        avatar: "/avatars/avatar.png",
        name: "Maffin_123"
      },
      date: "November 21, 21:00",
      image: "/posts/post.png",
      likes: 215,
      tags: ["Спорт", "Отдых"]
    }
  ]

  const skillsCategories = [
    {
      name: "Programming",
      skills: [
        {
          image: "/skills/programming.png",
          name: "programming",
          exp: 735,
          level: 2,
          to: 1000
        }
      ]
    },
    {
      name: "Drawning",
      skills: [
        {
          image: "/skills/drawning.png",
          name: "drawning",
          exp: 548,
          level: 4,
          to: 2000
        }
      ]
    }
  ]

  return <div className={styles.profile}>
    {avatar && (
      <AvatarChange />
    )}
    <div className={styles.user_card}>
      <div className={styles.banner}></div>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.67147 56.3082C6.67147 56.8743 7.14394 57.3333 7.72679 57.3333L56.2696 57.3334C56.8524 57.3334 57.3249 56.8745 57.3249 56.3085V55.0842C57.3492 54.7153 57.3985 52.8741 56.1849 50.8386C55.4196 49.5551 54.3089 48.4463 52.8836 47.5431C51.1593 46.4505 48.9658 45.6587 46.3128 45.1821C46.2932 45.1795 44.326 44.9187 42.3106 44.4041C38.8012 43.5077 38.4944 42.7143 38.4924 42.7066C38.4717 42.6282 38.4418 42.5529 38.4036 42.4821C38.3749 42.3341 38.304 41.7771 38.4396 40.2849C38.7838 36.4947 40.8169 34.2547 42.4505 32.455C42.9657 31.8874 43.4522 31.3513 43.827 30.8255C45.4434 28.5575 45.5934 25.9786 45.6002 25.8187C45.6002 25.4949 45.563 25.2286 45.4834 24.9818C45.3248 24.4879 45.0262 24.1802 44.8082 23.9555L44.8068 23.9539C44.7518 23.8974 44.7 23.8438 44.6576 23.7946C44.6414 23.7758 44.5985 23.7261 44.6376 23.4707C44.781 22.5309 44.8672 21.7439 44.9085 20.9942C44.9821 19.6585 45.0396 17.6609 44.695 15.7167C44.6525 15.3847 44.5794 15.0341 44.4657 14.6163C44.1017 13.2776 43.5169 12.133 42.7044 11.1884C42.5646 11.0364 39.1673 7.45715 29.3049 6.72276C27.9412 6.62123 26.593 6.67592 25.266 6.74375C24.9461 6.75956 24.5081 6.78127 24.0982 6.88747C23.08 7.15124 22.8082 7.79665 22.7369 8.15787C22.6186 8.75619 22.8265 9.22161 22.964 9.52965V9.52968V9.52972C22.984 9.57437 23.0086 9.62959 22.9656 9.77337C22.7366 10.1279 22.3765 10.4476 22.0093 10.7504C21.9032 10.8406 19.4301 12.973 19.2941 15.7586C18.9274 17.8771 18.9552 21.1779 19.3888 23.4593C19.414 23.5853 19.4512 23.7718 19.3908 23.8978C18.9245 24.3157 18.396 24.7893 18.3973 25.8699C18.4029 25.9786 18.5529 28.5575 20.1694 30.8255C20.5438 31.3509 21.03 31.8866 21.5448 32.4538L21.546 32.455V32.4551C23.1796 34.2549 25.2125 36.4947 25.5569 40.2847C25.6924 41.777 25.6214 42.3341 25.5928 42.4819C25.5545 42.5527 25.5246 42.6281 25.5041 42.7065C25.502 42.7142 25.1964 43.505 21.7028 44.3995C19.6873 44.9157 17.7032 45.1794 17.644 45.1879C15.0657 45.6231 12.8857 46.3951 11.1645 47.4821C9.74402 48.3793 8.63123 49.4901 7.85703 50.7837C6.62007 52.8506 6.65351 54.733 6.67147 55.0766V56.3082Z" stroke="#898989" strokeWidth="0.833333" strokeLinejoin="round" />
          </svg>
          <div className={styles.set_avatar} onClick={() => dispatch.toggleAvatar(!avatar)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.25 5L7.5 2.5H12.5L13.75 5H6.25Z" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinejoin="round" />
              <path d="M17.0832 5H2.9165C2.22615 5 1.6665 5.55964 1.6665 6.25V16.25C1.6665 16.9404 2.22615 17.5 2.9165 17.5H17.0832C17.7735 17.5 18.3332 16.9404 18.3332 16.25V6.25C18.3332 5.55964 17.7735 5 17.0832 5Z" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinejoin="round" />
              <path d="M9.99984 14.5834C11.8408 14.5834 13.3332 13.091 13.3332 11.2501C13.3332 9.40912 11.8408 7.91675 9.99984 7.91675C8.15888 7.91675 6.6665 9.40912 6.6665 11.2501C6.6665 13.091 8.15888 14.5834 9.99984 14.5834Z" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <h2>User_123
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 10.8333V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5H9.16667" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.8335 11.1333V14.1667H8.88233L17.5002 5.54504L14.4565 2.5L5.8335 11.1333Z" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinejoin="round" />
          </svg>
        </h2>
        <div className={styles.user_date}>
          <div className={styles.user_date_block}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="6" fill="#32C352" />
            </svg>
            <p>Active now</p>
          </div>
          <div className={styles.user_date_block}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#595959" />
            </svg>
            <p>Signed up 3 months ago</p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info_block}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 19.9999V9.89624L21.25 14.9481L30 19.9999L21.25 25.0517L12.5 30.1036V19.9999Z" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinejoin="round" />
            </svg>
            <div className={styles.text}>
              <p>Hours</p>
              <h5>82</h5>
            </div>
          </div>
          <div className={styles.info_block}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.6667 3.33325H25.8333L22.5 11.9167C26.2178 12.6713 29.3365 15.0761 31.0583 18.3333L36.6667 3.33325Z" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.1668 3.33325H3.3335L8.94191 18.3333C10.6637 15.0761 13.7823 12.6713 17.5002 11.9167L14.1668 3.33325Z" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M32.5 24.1667C32.5 31.0703 26.9036 36.6667 20 36.6667C13.0964 36.6667 7.5 31.0703 7.5 24.1667C7.5 22.0599 8.02122 20.0748 8.94175 18.3334C10.6635 15.0762 13.7822 12.6715 17.5 11.9168C18.3077 11.7528 19.1438 11.6667 20 11.6667C20.8562 11.6667 21.6922 11.7528 22.5 11.9168C26.2178 12.6715 29.3365 15.0762 31.0583 18.3334C31.9788 20.0748 32.5 22.0599 32.5 24.1667Z" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.9998 29.1666V18.3333L17.4998 19.1666M19.9998 29.1666H23.3332M19.9998 29.1666H16.6665" stroke="#AAAAAA" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className={styles.text}>
              <p>Do something</p>
              <h5>50% of time</h5>
            </div>
          </div>
        </div>
      </div>
      {component == "main" ? (
        <div className={styles.settings_button} onClick={() => setComponent("settings")}>
          <button>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.1419 22.0857C7.46635 21.5868 5.9749 20.6607 4.79393 19.4335C5.2345 18.9114 5.5 18.2367 5.5 17.5001C5.5 15.8432 4.15685 14.5001 2.5 14.5001C2.39977 14.5001 2.3007 14.505 2.203 14.5146C2.0699 13.8639 2 13.1902 2 12.5001C2 11.4548 2.16039 10.4469 2.4579 9.49975C2.47191 9.49995 2.48594 9.50005 2.5 9.50005C4.15685 9.50005 5.5 8.1569 5.5 6.50005C5.5 6.0244 5.3893 5.57465 5.1923 5.17506C6.34875 4.09975 7.76025 3.29501 9.32605 2.86157C9.8222 3.8341 10.8333 4.50007 12 4.50007C13.1667 4.50007 14.1778 3.8341 14.674 2.86157C16.2398 3.29501 17.6512 4.09975 18.8077 5.17506C18.6107 5.57465 18.5 6.0244 18.5 6.50005C18.5 8.1569 19.8432 9.50005 21.5 9.50005C21.5141 9.50005 21.5281 9.49995 21.5421 9.49975C21.8396 10.4469 22 11.4548 22 12.5001C22 13.1902 21.9301 13.8639 21.797 14.5146C21.6993 14.505 21.6002 14.5001 21.5 14.5001C19.8432 14.5001 18.5 15.8432 18.5 17.5001C18.5 18.2367 18.7655 18.9114 19.2061 19.4335C18.0251 20.6607 16.5336 21.5868 14.8581 22.0857C14.4714 20.876 13.338 20.0001 12 20.0001C10.662 20.0001 9.5286 20.876 9.1419 22.0857Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
              <path d="M12 16C13.933 16 15.5 14.433 15.5 12.5C15.5 10.567 13.933 9 12 9C10.067 9 8.5 10.567 8.5 12.5C8.5 14.433 10.067 16 12 16Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            Settings
          </button>
        </div>
      ) : (
        <div className={styles.settings_button} onClick={() => setComponent("main")}>
          <button>Save</button>
        </div>
      )}
    </div>
    <div className={styles.content}>
      {component == "main" ? (
        <main>
          <div className={styles.row}>
            <div className={styles.col}>
              <h2>Activities</h2>
              {posts.map((el, index) => (
                <Post key={index} date={el.date} image={el.image} likes={el.likes} tags={el.tags} user={el.user} />
              ))}
            </div>
            <div className={styles.col}>
              <h2>Skills</h2>
              <div className={styles.skills}>
                {skills ? skillsCategories.map((el, index) => (
                  <div className={styles.category} key={index}>
                    <h4>{el.name}</h4>
                    {el.skills.map((el, index) => (
                      <Skill key={index} exp={el.exp} image={el.image} level={el.level} name={el.name} to={el.to} />
                    ))}
                  </div>
                )) : (
                  <div className={styles.category}>
                    <h4>{skillsCategories[0].name}</h4>
                    <Skill exp={skillsCategories[0].skills[0].exp} image={skillsCategories[0].skills[0].image} level={skillsCategories[0].skills[0].level} name={skillsCategories[0].skills[0].name} to={skillsCategories[0].skills[0].to} />
                  </div>
                )}
              </div>
              <div className={styles.more} onClick={() => setSkills(!skills)}>
                <button>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={skills ? styles.close_more : styles.open_more}>
                    <path d="M12 1.5L7 6.5L2 1.5" stroke="#898989" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>
      ) : component == "settings" ? (
        <div className={styles.settings}>
          <h1>Personal Settings</h1>
          <p>Here you can change your password, email, etc.</p>
          <form>
            <div className={styles.row}>
              <div className={styles.input}>
                <p>Username</p>
                <input type="text" />
              </div>
              <div className={styles.input}>
                <p>Email</p>
                <input type="email" />
              </div>
              <div className={styles.input_password}>
                <p>Current password</p>
                <input type="text" />
              </div>
              <div className={styles.input_password}>
                <p>New password</p>
                <input type="text" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.languages}>
                <h3>Language</h3>
                <div className={styles.languages_selects}>
                  <div className={styles.language}>
                    <h4>English</h4>
                    <input type="radio" />
                  </div>
                  <div className={styles.language}>
                    <h4>Русский</h4>
                    <input type="radio" />
                  </div>
                  <div className={styles.language}>
                    <h4>Español</h4>
                    <input type="radio" />
                  </div>
                  <div className={styles.language}>
                    <h4>日本</h4>
                    <input type="radio" />
                  </div>
                </div>
              </div>
              <div className={styles.notifications}>
                <h3>Notifications</h3>
                <div className={styles.notifications_checkbox}>
                  <div className={styles.checkbox} onClick={() => setCheckbox(!checkbox)}>
                    <div className={checkbox ? styles.circle_active : styles.circle}></div>
                  </div>
                  <div className={styles.notifications_text}>
                    <h4>Email notifications</h4>
                    <p>Remind me about unseen notifications via email.</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : ""}
    </div>
  </div >
}

export default Profile;