import styles from './Skill.module.css'
export default function SkillCard(props) {
    return (
        <div className={styles["progress-container"]}>
            <div className={styles['Tech-name']}>{props.name}</div>
            <div className={styles["progress-bar"]}>
                <div className={styles["progress-fill"]} style={{width: `${props.efficiency}%`}}><p>{props.efficiency}%</p></div>
            </div>
        </div>
    )
}