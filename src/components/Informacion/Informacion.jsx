import styles from './Informacion.module.scss';
import nosotros from '../../assets/24.jpg';

export const Informacion =()=>{
    return(
        <div className={styles.infoContainer}>
            <div className={styles.infoTitle}>NOSOTROS</div>
            <p className={styles.infoText}>En Wunderlust reunimos y seleccionamos las mejores actividades y experiencias disponibles en cada destino de la Argentina. Funcionamos como un punto de acceso directo para que elijas qué hacer, cuándo y cómo hacerlo, sin intermediarios innecesarios ni procesos complejos.</p>
                  <img className={styles.nosotrosImg} src={nosotros}/>
        </div>
    )
} 