import styles from './Actividades.module.scss';
import { actividadesData } from './actividadesData';


export const ActividadesCards = () => {


    return (
        <>
        <h2 className={styles.sectionTitle}>NAVEGACIONES</h2>
        <div className={styles.cardContainer}>
            
            {actividadesData
            .filter((item)=>
                item.categoria ==="navegaciones")            
            .map((item) => (
                <div className={styles.card} key={item.id}>
                    <div className={styles.categoria}>{item.categoria}</div>
                    <h2 className={styles.cardTitle}>{item.destino}</h2>
                    <h3 className={styles.cardSubtitle}> {item.actividad}</h3>
                    <img className={styles.cardImg} src={item.img} alt={item.destino} />
                    <h3 className={styles.cardDetail}>{item.detalle}</h3>
                    <p className={styles.cardDescription}>{item.descripcion}</p>
                    <button className={styles.btnCard}>Reservá ahora!</button>
                </div>
            ))

            }
        </div>
         <h2 className={styles.sectionTitle}>SENDERISMO Y RUTAS</h2>
        <div className={styles.cardContainer}>
            
            {actividadesData
            .filter((item)=>
                item.categoria ==="rutas")            
            .map((item) => (
                <div className={styles.card} key={item.id}>
                    <div className={styles.categoria}>{item.categoria}</div>
                    <h2 className={styles.cardTitle}>{item.destino}</h2>
                    <h3 className={styles.cardSubtitle}> {item.actividad}</h3>
                    <img className={styles.cardImg} src={item.img} alt={item.destino} />
                    <h3 className={styles.cardDetail}>{item.detalle}</h3>
                    <p className={styles.cardDescription}>{item.descripcion}</p>
                    <button className={styles.btnCard}>Reservá ahora!</button>
                </div>
            ))

            }
        </div>
        </>
    );


};