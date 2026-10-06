import styles from './Testimonials.module.scss';
import { testimonialsData } from './testimonialsData';

const getInitials = (name) =>
    name.split(" ").map((word) => word[0]).join("").slice(0, 2);

const TestimonialCard = ({ rating, title, text, userName, date }) => {
    return (
        <div className={styles.card}>
            <span
                className={styles.cardRating}
                aria-label={`${rating} de 5 estrellas`}
            >
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                        {i < rating ? "★" : "☆"}
                    </span>
                ))}
            </span>

            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardText}>{text}</p>

            <div className={styles.cardAuthor}>
                <span className={styles.avatar} aria-hidden="true">
                    {getInitials(userName)}
                </span>

                <div className={styles.authorInfo}>
                    <span className={styles.authorName}>
                        {userName}
                    </span>
                    <span className={styles.cardDate}>
                        {date}
                    </span>
                </div>

            </div>

        </div>
    )
}


export const Testimonials = () => {
    return (
        <>
            <div className={styles.testimonialsTitle}>Somos Bastante Populares, pero no se fíen solo de nuestra palabra </div>
            <div className={styles.cardsContainer}>
                {testimonialsData.map((item) => (
                    <TestimonialCard key={item.id} {...item} />
                ))}
            </div>
        </>
    )
}