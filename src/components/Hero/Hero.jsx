import bannerVideo from '../../assets/bannerOPT.m4v';
import { MainContent } from '../MainContent/MainContent';
import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.backgroundVideo}>
        <video
          autoPlay
          muted
          playsInline
          preload="metadata"          
          playsInline
        >
          <source src={bannerVideo} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
      </div>

      <div className={styles.heroOverlay}>
        <h1 className={styles.heroTitle}>
          Bienvenido usuario
        </h1>

        <h2 className={styles.heroSubtitle}>
         No sé que poner
        </h2>

        <button className={styles.heroBtn}>
          Conoce más
        </button>

      </div>
    </header>
  );
};

