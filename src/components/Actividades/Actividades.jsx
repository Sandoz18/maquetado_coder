import styles from './Actividades.module.scss';
import { ActividadesCards } from './ActividadesCards.jsx';
import imagenPortada from './../../assets/actividades/perito_moreno.mp4';

export const Actividades = () => {

    return (
        <div className={styles.actividadesContainer}>            
            <h3 className={styles.actividadestitle}>Descubrí Argentina</h3>
            <p className={styles.ActividadesText}>Argentina lo tiene todo. Sumérgete en la belleza de los Andes y disfruta de caminatas desafiantes en El Chaltén o navega por los cristalinos lagos patagónicos. Explora los coloridos paisajes de la Quebrada de Humahuaca. Desde las Salinas Grandes hasta las Cataratas, cada rincón te sorprenderá. Disfruta de la tranquilidad en las orillas del Nahuel Huapi, rodeado de montañas nevadas y bosques milenarios.</p>
            <div className={styles.videoContainer}>
                <video className={styles.actividadesVideo}

                    autoPlay
                    muted
                    playsInline
                    preload="metadata"

                >
                    <source src={imagenPortada}></source>
                </video>
            </div>
            <h3 className={styles.categoryTitle}>
                Aprovechá nuestra selección de destinos recomendados para vos!
            </h3>
            <div className={styles.navegacionesBackground}>
                <h4 className={styles.navegacionesText}>NAVEGACIONES</h4>
            </div>
            <div className={styles.senderismoBackground}>
                <h4 className={styles.senderismoText}>SENDERISMO Y RUTAS</h4>
            </div>
             <div className={styles.senderismoBackground}>
                <h4 className={styles.Text}>Compartí tu experiencia con Nosotros</h4>
            </div>
            

            <ActividadesCards />
        </div>
    )
}