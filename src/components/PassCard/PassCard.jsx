import styles from './PassCard.module.scss';


export const PassCard = () => {
    return (
        <div className={styles.passContainer}>

            <div className={styles.passInfo}>
                <h3 className={styles.passTitle}>Elegí tu pase</h3>
                <div className={styles.passSubtitle}>Más de 15.000 viajeros en el mundo confian en nosotros!</div>
                <button className={styles.passButton}>Obtené más información</button>
            </div>


            <div className={styles.passCard}>
                <div className={styles.passHeader}>
                    <div className={styles.cardPrice}>Desde $90.999</div>
                    <div className={styles.cardTitle}>Pase Explorador</div>
                    <ul className={styles.cardList}>
                        <li className={styles.itemList}>Elegí un pase de 2, 3, 4, 5 o 6opciones</li>
                        <li className={styles.itemList}>Tendrás 30 días para usarlo</li>
                        <li className={styles.itemList}>Planificá y reservá tus atracciones</li>
                        <li className={styles.itemList}>Disfrutá de acceso rápido y guiado a las principales atracciones</li>

                    </ul>

                </div>

            </div>
        </div>
    )
}