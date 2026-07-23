import styles from './Project.module.css'
export default function ProjectCard(props) {
    console.log(props.on)
    return (
        <nav className={styles[props.on ? "dim" : ""]} 
        onMouseEnter={() => props.toggle(props.id)}
        onMouseLeave={() => props.toggle(props.id)}>
            <h1>{props.name}</h1>
            <h4>{props.desc}</h4>
            <a className={styles['project-link']} href={props.url} target='_blank'><button>Go to project</button></a>
        </nav>
    )
}