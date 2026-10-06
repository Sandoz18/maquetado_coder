import styles from './ExplorarAtracciones.module.scss';
import { AtraccionesTabs } from './AtraccionesTabs';
import { atraccionesData } from './atraccionesData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CATEGORIAS = [
    'Lugares imprescindibles para visitar',
    'Tours',
    'Monumentos y Lugares emblemáticos',
    'Comida y Bebida',
    'Museos'
];



export const ExplorarAtracciones = () => {
    const navigate = useNavigate();
    const [categoriaActiva, setCategoriaActiva] = useState(CATEGORIAS[0]);

    const atraccionesFiltradas = atraccionesData.filter(
        (item) => item.categoria === categoriaActiva
    );

    return (
        <div className={styles.exploradorContainer}>
            <div className={styles.exploradorMainTitle}>ESPECIAL BUENOS AIRES EXPERIENCE</div>
            <div className={styles.exploradorTitle}>Acceso a más de 30 atracciones en Buenos Aires</div>
            <div className={styles.exploradorSubtitle}>Desde el Obelisco hasta una clase de tango en San Telmo,
                <span className={styles.goBuenosAires}>¡vívelo todo con un pase Go Buenos Aires!</span></div>


            <AtraccionesTabs
                categorias={CATEGORIAS}
                categoriaActiva={categoriaActiva}
                onSelectCategoria={setCategoriaActiva}
            />


            <div className={styles.cardsGrid}>
                {atraccionesFiltradas.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={card.imagen} alt={card.titulo} />
                        </div>
                        <h4>{card.titulo}</h4>

                        <div className={styles.ratingInfo}>
                            <span className={styles.star}>★</span>
                            <span className={styles.score}>{card.rating}</span>
                            <span className={styles.reviews}>({card.reviews})</span>
                        </div>
                    </div>



                ))}
            </div>


            <button onClick={() => navigate('/TodasLasAtracciones')} className={styles.todasBtn}>Ver todas las atracciones</button>
        </div>



    )

}