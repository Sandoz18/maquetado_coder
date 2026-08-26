import React from 'react';
import styles from './MainContent.module.scss';
import { Cards } from '../Cards/Cards.jsx';
import { useEffect, useState } from 'react';
import { Newsletter } from '../Newsletter/Newsletter.jsx';

export const MainContent = () => {
  // Corrección 1: Booleans y null verdaderos (sin comillas)
  const [resultado, setResultado] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const hashtags = [
    '#ArgentinaAventura',
    '#ViveLaNaturaleza',
    '#ExploraArgentina',
    '#Patagonia',
    '#Andes',
    '#Mendoza',
    '#Salta',
    '#TierraDelFuego',
    '#TurismoSostenible',
  ];

  useEffect(() => {
    console.time('⏱️ Tiempo de renderizado MainContent');
    document.body.style.backgroundColor = '#0A1118';
    console.timeEnd('⏱️ Tiempo de renderizado MainContent');
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const manejarClickHashtag = async (hashtag) => {
    // Corrección 2: Invocación de funciones setter entre paréntesis
    setCargando(true);
    setError(null);
    setResultado(null);

    // Corrección 3: El try/catch vive DENTRO de manejarClickHashtag
  try {
    const res = await fetch("http://127.0.0.1:5001/migracion-react/us-central1/generarRecomendacion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hashtag }),
    });

    const data = await res.json();

    if (!res.ok) {
      // 🔴 Esto va a imprimir en la consola qué dijo el servidor
      console.log("Respuesta del servidor con error:", data);
      throw new Error(data.error || "Error en el servidor");
    }

    setResultado(data);
  } catch (err) {
    console.error("Detalle exacto del error:", err);
    setError(err.message);
  } finally {
    setCargando(false);
  }
}; // La función cierra recién acá

  return (
    <div className={styles.mainContent}>
      <h5 className={styles.mainTitle}>Descubrí nuestros destinos</h5>
      <h3 className={styles.mainSubtitle}>Explora la belleza de Argentina</h3>

      <p className={styles.mainText}>
        Explora glaciares milenarios, escala volcanes, navega por ríos caudalosos
        y descubre la rica biodiversidad de nuestros bosques. Con guías expertos
        y equipos de última generación, cada excursión es una oportunidad única
        para conectar con la naturaleza. Desde trekking en la Cordillera de los
        Andes hasta buceo en las aguas cristalinas de la Patagonia, te ofrecemos
        experiencias inolvidables en destinos únicos. ¡Reservá ahora y viví
        Argentina como nunca antes!
      </p>

      {/* Contenedor de hashtags */}
      <div className={styles.hashtagsContainer}>
        {hashtags.map((tag) => (
          <button
            key={tag}
            onClick={() => manejarClickHashtag(tag)}
            disabled={cargando}
            className={styles.hashtagButton}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Mensajes de feedback */}
      {cargando && <p className={styles.loadingText}>Consultando a Gemini...</p>}
      {error && <p className={styles.errorText}>{error}</p>}

      {/* Tarjeta de resultado */}
        {resultado && (
  <div className={styles.tarjetaRecomendacion}>
    <button className={styles.btnCerrar} onClick={() => setResultado(null)}>×</button>
    <span className={styles.badgeIa}>Recomendación IA</span>
    <h3 className={styles.tituloRecomendacion}>📍 {resultado.lugar}</h3>
    
    {resultado.queryFotos && (
      <a 
        href={`https://unsplash.com/s/photos/${encodeURIComponent(resultado.queryFotos)}`}
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.linkFotos}
      >
        🖼️ Ver fotos de alta resolución en Unsplash →
      </a>
    )}
  </div>
)}

      <Cards />

      <h5 className={styles.mainFootertitle}>Descubrí Argentina con Wunderlust</h5>
      <h6 className={styles.mainFooterSubtitle}>
        Planificá tu viaje perfecto con nosotros. ¡Tu próxima aventura te
        espera! Explora el mundo con nuestra app. Descubre los mejores destinos,
        lee reseñas de otros viajeros y reserva alojamientos y actividades que
        se adapten a tus gustos. ¡Crea tu itinerario perfecto y vive experiencias
        inolvidables!
      </h6>

      <Newsletter />
    </div>
  );
};




