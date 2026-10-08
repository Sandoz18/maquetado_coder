import styles from './Actividades.module.scss';
import { ActividadesCards } from './ActividadesCards.jsx';
import imagenPortada from './../../assets/actividades/perito_moreno.mp4';

export const Actividades = () => {

    return (
        <div className={styles.actividadesContainer}>

            <div className={styles.videoContainer}>
                <video className={styles.actividadesVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"

                >
                    <source src={imagenPortada}></source>
                </video>
                <div className={styles.heroContent}>
                <h3 className={styles.actividadestitle}>Descubrí Argentina</h3>
                <p className={styles.actividadesText}>Argentina lo tiene todo. Sumérgete en la belleza de sus paisajes y  el pulso vibrante de Buenos Aires. Naturaleza, cultura, gastronomía y vida urbana en un solo destino.</p>
            </div>
            </div>

            <h3 className={styles.categoryTitle}>
                Recomendados para vos
            </h3>

            <div className={styles.senderismoBackground}>
                <h4 className={styles.text}># Compartí tu experiencia</h4>
            </div>


            <ActividadesCards />
        </div>
    )
}