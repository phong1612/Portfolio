import resume from '../asset/Phong_Dinh_Resume.pdf'
import styles from './Resume.module.css'
export default function Resume() {
    return (
        <article className={styles['resume-container']}>
            <h1>My resume</h1>
            <br />
            <iframe
                src={resume}
                width="70%"
                height="100%"
                style={{ border: "none" }}
                title="Resume"
            />
        </article>
    );
}
