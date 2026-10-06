import styles from './ExplorarAtracciones.module.scss';

export const AtraccionesTabs = ({categorias, categoriaActiva, onSelectCategoria})=>{

    return(
        <ul className={styles.tabContainer}>
             {categorias.map((cat) =>(
            <li className={styles.tabItem} key={cat}>
                <button
            className={`${styles.tabButton} ${
              categoriaActiva === cat ? styles.activeTab : ''
            }`}
            onClick={() => onSelectCategoria(cat)}
          >
            {cat}
          </button>
            </li>
        ))}
        </ul>
       
    )
}