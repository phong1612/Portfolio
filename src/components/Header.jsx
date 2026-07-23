import { useState } from 'react'
import styles from './Header.module.css'
import avatar from '../assets/avatar.jpg'

export default function Header(props) {


    function toggleLightMode() {
        props.setLight(prevState => !prevState)
    }

    return (
        <header className={styles['header-container']}>
            <div className={styles[props.lightMode ? 'info-container-light' : 'info-container-dark']}>
                <h2>Software Engineer</h2>
                <h1>Phong Nhat Dinh</h1>
                <div className={styles["slide"]}>
                    <h2>{props.lightMode ? 'Light Mode' : 'Dark Mode'}</h2>
                    <label className={styles["switch"]}>
                    <input type="checkbox" onClick={toggleLightMode}/>
                    <span className={styles["slider"]}></span>
                    </label>
                </div>
            </div>

            <div className={styles['menu-container']}>
                <h3><button value="about me" onClick={props.onAbout}>About me</button></h3>
                <h3><button value="skills" onClick={props.onSkill}>Skills</button></h3>
                <h3><button value="experience" onClick={props.onExp}>Experience</button></h3>
                <h3><button value="project" onClick={props.onProj}>Project</button></h3>
                <h3><button value="resume" onClick={props.onResume}>Resume</button></h3>
            </div>
        </header>
    )
}