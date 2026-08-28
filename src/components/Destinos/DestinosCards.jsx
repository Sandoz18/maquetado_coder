import styles from './Destinos.module.scss';
import { destino } from './data'; 

export const DestinosCards = () => {
    return (
        <div className={styles.cardsContainer}>
            {destino.map((item) => (
                <div key={item.id} className={styles.destinoCard}>
                    <img src={item.imagen} alt={item.titulo} className={styles.destinoCardImage} />
                    <p className={styles.destinoCardTitle}>{item.titulo}</p>
                </div>
            ))}
        </div>
    );
};