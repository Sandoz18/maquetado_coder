import styles from './Destinos.module.scss';

const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200', alt: 'Cerro de los Siete Colores, Purmamarca', lugar: 'Purmamarca, Jujuy', usuario: '@marina.viaja' },
    { id: 2, src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200', alt: 'Quebrada de Humahuaca', lugar: 'Quebrada de Humahuaca', usuario: '@lucas_ar' },
    { id: 3, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200', alt: 'Glaciar Perito Moreno', lugar: 'Perito Moreno, Santa Cruz', usuario: '@sofi.mochila' },
    { id: 4, src: 'https://images.unsplash.com/photo-1531722569936-825d3dd91b15?q=80&w=1200', alt: 'Paisaje montañoso vibrante', lugar: 'Lugar a definir', usuario: '@caro.en.ruta' },
    { id: 5, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200', alt: 'Valle y río patagónico', lugar: 'Lugar a definir', usuario: '@nico.trekking' },
    { id: 6, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200', alt: 'Naturaleza con luz de atardecer', lugar: 'Lugar a definir', usuario: '@vale.explora' },
    { id: 7, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200', alt: 'Bosques y montañas del sur', lugar: 'Lugar a definir', usuario: '@tomi.sur' },
    { id: 8, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200', alt: 'Cordillera de los Andes', lugar: 'Cordillera de los Andes', usuario: '@juli.andes' },
    { id: 9, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200', alt: 'Lago cristalino del sur', lugar: 'Lugar a definir', usuario: '@fede.mochilero' },
    { id: 10, src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1200', alt: 'Montañas nevadas patagónicas', lugar: 'Lugar a definir', usuario: '@lau.patagonia' },
    { id: 11, src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200', alt: 'Naturaleza andina', lugar: 'Lugar a definir', usuario: '@mica.viajera' },
    { id: 12, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200', alt: 'Paisaje verde de Argentina', lugar: 'Lugar a definir', usuario: '@santi.rutas' }
];

export const Gallery = () => {
    return (
        <div className={styles.galleryContainer}>
            {galleryImages.map((image) => (
                <figure className={styles.galleryItem} key={image.id}>
                    <img
                        src={image.src}
                        alt={`${image.alt}, foto de ${image.usuario}`}
                        className={styles.galleryImage} />
                    <figcaption className={styles.galleryCaption}>
                        <strong>{image.lugar}</strong>
                        <span>{image.usuario}</span>
                    </figcaption>
                </figure>

            ))}
        </div>
    );
};