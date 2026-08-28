import styles from './Destinos.module.scss';

const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200', alt: 'Cerro de los Siete Colores, Purmamarca' },
    { id: 2, src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200', alt: 'Quebrada de Humahuaca' },
    { id: 3, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200', alt: 'Glaciar Perito Moreno' },
    { id: 4, src: 'https://images.unsplash.com/photo-1531722569936-825d3dd91b15?q=80&w=1200', alt: 'Paisaje montañoso vibrante' },
    { id: 5, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200', alt: 'Valle y río patagónico' },
    { id: 6, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200', alt: 'Naturaleza con luz de atardecer' },
    { id: 7, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200', alt: 'Bosques y montañas del sur' },
    { id: 8, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200', alt: 'Cordillera de los Andes' },
    { id: 9, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200', alt: 'Lago cristalino del sur' },
    { id: 10, src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200', alt: 'Montañas nevadas patagónicas' },
    { id: 11, src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200', alt: 'Naturaleza andina' },
    { id: 12, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200', alt: 'Paisaje verde de Argentina' }
];

export const Gallery = () => {
    return (
        <div className={styles.galleryContainer}>
            {galleryImages.map((image) => (
                <div className={styles.galleryItem} key={image.id}>
                    <img src={image.src} alt={image.alt} className={styles.galleryImage}/>
                </div>
            ))}
        </div>
    );
};