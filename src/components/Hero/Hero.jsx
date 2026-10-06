import bannerVideo from '../../assets/bannerOPT.m4v';
import { useState } from 'react';
import styles from './Hero.module.scss';
import destinosArgentina from '../Home/destinosArgentina.json';

export const Hero = () => {
  const [busqueda, setBusqueda] = useState("");
  const quitarTildes = (texto) => texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const sugerencias = busqueda.trim() === '' ? []
    : destinosArgentina.filter((item) => item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

  const match = busqueda.trim() === ""
    ? undefined
    : destinosArgentina.find((item) => item.nombre.toLowerCase().startsWith(busqueda.toLowerCase())
    );

  const textoFantasma = match ? match.nombre : "";
  console.log("busqueda:", busqueda, "| match:", match, "| fantasma:", textoFantasma);


  return (
    <header className={styles.heroContainer}>
      <div className={styles.backgroundVideo}>
        <video
          autoPlay
          muted        
          playsInline
          preload="metadata"          
        >
          <source src={bannerVideo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>

      <div className={styles.heroOverlay}>
        <div className={styles.heroCard}>

        <h1 className={styles.heroTitle}>
          Argentina te espera
        </h1>

        <h2 className={styles.heroSubtitle}>
          Vení a descubrirla
        </h2>
        
        <div className={styles.searchWidget}>
          <div className={styles.searchInput}>
            <span className={styles.searchLabel}>¿A dónde querés ir?</span>
            <div className={styles.inputWrapper}>
              <input className={styles.inputFantasma} value={textoFantasma} disabled readOnly/>
              <input className={styles.input}
                type="text"
                placeholder='Ingresá una Ciudad'
                value={busqueda}
                onChange={(e) => {
                  console.log(e.target.value)
                  setBusqueda(e.target.value)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Tab' && match) {
                    e.preventDefault();
                    setBusqueda(match.nombre);

                  }
                }}
              ></input>
            </div>
          </div>
          <button className={styles.heroBtn}>
            Buscar
          </button>
          </div>          
        </div>
      </div>
    </header>
  );
};

