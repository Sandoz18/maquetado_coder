import styles from './Cards.module.scss';
import { Link } from 'react-router-dom';
import { LuChevronRight } from "react-icons/lu";

export const Card = ({ id, title, description, text, image, link }) => {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={image} loading="lazy" decoding="async" alt={title} />
            <div className={styles.textContainer}>
                <div className={styles.titleBackground}>
                    <h3 className={styles.title}>{title}</h3>
                </div>
                <h5 className={styles.description}>{description}</h5>
                <p className={styles.text}>{text}</p>
            </div>           
            <Link to={link} className={styles.button}>
                Ver más
                <LuChevronRight className="card-btn-icon" />
            </Link>
            
        </div>
    );
};