import styles from './Informacion.module.scss';
import nosotros from '../../assets/24.jpg';

export const Informacion =()=>{
    return(
        <div className={styles.infoContainer}>
            <div className={styles.infoTitle}>NOSOTROS</div>
            <p className={styles.infoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita qui fugiat facere doloribus ipsum aperiam sunt
                 illum maiores quos, aut consectetur incidunt voluptates fuga harum,
                  fugit doloremque, explicabo velit nisi.</p>
                  <img className={styles.nosotrosImg} src={nosotros}/>
        </div>
    )
} 