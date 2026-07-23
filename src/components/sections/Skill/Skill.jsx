import { useState } from 'react'
import SkillCard from './SkillCard'
import skill_data from './SkillData.js'
export default function Skill() {
    const [skill, setSkill] = useState(skill_data)
    const skillEl = skill.map(el => (
        <SkillCard key={el.id} name={el.name}  efficiency={el.efficiency}/>
    ))
    return (
        <article>
            <h1>My Tech-Stack</h1>
            <br />
            {skillEl}
        </article>
    )
}