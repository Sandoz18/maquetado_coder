import styles from './Actividades.module.scss';
import { actividadesData } from './actividadesData';


export const ActividadesCards = () => {


    return (
        <div className={styles.cardContainer}>
            {actividadesData.map((item) => (
                <div className="card" key={item.id}>
                    <div className="categoria">{item.categoria}</div>
                    <h2 className={styles.cardTitle}>{item.destino}</h2>
                    <h3 className={styles.cardSubtitle}> {item.actividad}</h3>
                    <img src={item.img} alt={item.destino} />
                    <h3 className={styles.cardDetail}>{item.detalle}</h3>
                    <p className={styles.cardDescription}>{item.descripion}</p>
                </div>
            ))

            }
        </div>
    );


};