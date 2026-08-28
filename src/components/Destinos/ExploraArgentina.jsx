
import styles from './Destinos.module.scss';
import { socialLinks } from '../Footer/Footer';

export const ExploraArgentina = () => {
    return (
        <div className={styles.exploraContainer}>
            <h2 className={styles.exploraTitle}>#EXPLORA ARGENTINA</h2>
            <h4 className={styles.exploraSubtitle}>Compartí tu Experiencia</h4>
            <div className={styles.socialMediaContainer}>
                <div className={styles.social}>
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                            <i className={link.iconClass}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};