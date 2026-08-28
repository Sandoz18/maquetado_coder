import { DestinosCards } from './DestinosCards';
import { Alojamientos } from './Alojamientos';
import { ExploraArgentina } from './ExploraArgentina';
import styles from './Destinos.module.scss';
import { Gallery } from './Gallery';

export const Destinos = () => {

    return (
        <section className={styles.destinosContainer}>
            <h1 className={styles.destinosTitle}>Tu próximo destino te espera!</h1>
            <p className={styles.destinosText}>Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Amet, quisquam totam explicabo,
                atque ratione molestias distinctio fuga voluptatibus doloremque id officia iusto repellat quasi dignissimos nisi eos perspiciatis aspernatur similique.</p>
            <DestinosCards />
            <ExploraArgentina />
            <Gallery/>
            <Alojamientos />
        </section>
    );

};