import styles from './AboutMe.module.css'
import avatar from './asset/Avatar.jpeg'

import logo from './asset/linkedin-logo.webp'
import instagram from './asset/instagram.webp'
import email from './asset/gmail.webp'
import github from './asset/github.webp'
export default function AboutMe() {
    return (
        <article className={styles["aboutme-container"]}>
                <div className={styles['image-container']}>
                    <img src={avatar} alt="" />
                    <div className={styles["location-container"]}>
                        <h3>Clayton, Victoria, Australia</h3>
                    </div>
                    <div className={styles['contact-container']}>
                        <a href="https://www.linkedin.com/in/phongndinh/" target='_blank'>
                            <div className={styles['socialItems']}>
                                <img src={logo} alt="LinkedIn Avatar" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/ph.dinh_/" target='_blank'>
                            <div className={styles['socialItems']}>
                                <img src={instagram} alt="Instagram Avatar" />
                            </div>
                        </a>
                        <a href="https://github.com/phong1612" target='_blank'>
                            <div className={styles['socialItems']}>
                                <img src={github} alt="Instagram Avatar" />
                            </div>
                        </a>
                        <a href="mailto:dinhnhatphong1612@gmail.com" target='_blank'>
                            <div className={styles['socialItems']}>
                                <img src={email} alt="Instagram Avatar" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className={styles["intro"]}>
                    <h1>Hi, my name is Phong Nhat Dinh but you can call me Jason.</h1>
                </div>
                <div className={styles['info-container']}>
                    <h3>I'm an UI/UX designer and Front End Developer pursuing a Master in AI at Monash University.
                    <br />
                    <br />
                    I'm passionate about building things that look clean and work smoothly. React and JavaScript are my main tools, but I also enjoy Python projects—especially anything involving AI/ML or data.</h3>
                </div>
        </article>
    )
}