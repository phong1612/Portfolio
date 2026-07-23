import AboutMe from './sections/AboutMe/AboutMe'
import Skill from './sections/Skill/Skill'
import Project from './sections/Project/Project'
import Experience from './sections/Experience/Experience'
import Resume from './sections/Resume/Resume'
import styles from './MainContent.module.css'
export default function MainContent(props) {
    
    


    return (
        <main className={styles[props.lightMode ? "light" : "dark"]}>
        
            <section ref={props.aboutRef}><AboutMe /></section>

            <section ref={props.skillRef}><Skill /></section>
                
            <section ref={props.expRef}><Experience /></section>

            <section ref={props.projRef}><Project /></section>

            <section ref={props.resumeRef}><Resume /></section>
        
            <h4>Built by Phong Nhat Dinh | Last Updated: {new Date().toDateString()}.</h4>
            <br />
        </main>
    )
}