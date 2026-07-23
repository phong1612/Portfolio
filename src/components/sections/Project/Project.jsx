import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import styles from './Project.module.css'
import data from './project_data.js'
export default function Project() {
    const [project, useProject] = useState(data)

    function toggle(id) {
        useProject(prev_prj => 
            prev_prj.map(item => {
                return item.id !== id ? {...item, on: !item.on} : item;
            })
        )
    }

    const projectData = project.map(prj => (
        <ProjectCard key={prj.id} id={prj.id} name={prj.name} desc={prj.Description} url={prj.url} toggle={toggle} on={prj.on}/>

    ))
    return (
        <article>
            <h1>My Project</h1>
            <br />
            {projectData}
        </article>
    )
}