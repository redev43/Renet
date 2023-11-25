import ISkill from "@/interfaces/skill.interface";
import styles from "@/ui/Skill/Skill.module.scss"
import Image from "next/image";
import { FC } from "react";

const Skill: FC<ISkill> = ({ exp, image, level, name, to }) => {
  return <div className={styles.skill}>
    <div className={styles.bar}>
      <Image src={image} alt="skill" width={80} height={80} />
    </div>
    <div className={styles.info}>
      <h4>{name}</h4>
      <p>lvl {level}</p>
      <p><span>xp</span> {exp} / {to}</p>
    </div>
  </div>
}

export default Skill;