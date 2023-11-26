"use client"

import { useTypedSelector } from "@/hooks/useTypedSelector.hook";
import IPost from "@/interfaces/post.interface";
import ISkill from "@/interfaces/skill.interface";
import styles from "@/pages/Home/Home.module.scss"
import Menu from "@/ui/Menu/Menu";
import Post from "@/ui/Post/Post";
import Skill from "@/ui/Skill/Skill";
import Task from "@/ui/Task/Task";
import { useState } from "react";

const Home = () => {
  const [skills, setSkills] = useState<boolean>(false)
  const menu = useTypedSelector(state => state.menu)

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

  return <div>
    {menu && (
      <Menu />
    )}
    <div className={styles.home}>
      <div className={styles.row}>
        <div className={styles.col}>
          <h2>Activities</h2>
          {posts.map((el, index) => (
            <Post key={index} date={el.date} image={el.image} likes={el.likes} tags={el.tags} user={el.user} />
          ))}
          <Task />
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
    </div>
  </div>
}

export default Home;