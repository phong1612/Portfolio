import styles from './Experience.module.css'
export default function Expo_comp(props) {
    return (
        <div className={styles['experience-container']}>
            <div className={styles["img-container"]}>
                <img src={props.company_pic} alt=""/>
            </div>
            <div className={styles['company-container']}>
                <h1>{props.company}</h1>
                <h2>{props.position}</h2>
            </div>
            <div className={styles['spec-container']}>
                <h4>{props.time}</h4>
            </div>
        </div>
    )
}