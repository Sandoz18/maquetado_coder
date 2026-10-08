import { DestinosCards } from './DestinosCards';
import { Alojamientos } from './Alojamientos';
import { ExploraArgentina } from './ExploraArgentina';
import styles from './Destinos.module.scss';
import { Gallery } from './Gallery';

export const Destinos = () => {

    return (
        <section className={styles.destinosContainer}>
            <h1 className={styles.destinosTitle}>Elegí próximo destino!</h1>
            <p className={styles.destinosText}>Montañas, lagos, playas y glaciares te esperan. Contanos qué tipo de viajero sos y te ayudamos a armar la escapada ideal.</p>
            <DestinosCards />
            <ExploraArgentina />
            <Gallery/>
            <Alojamientos />
        </section>
    );

};