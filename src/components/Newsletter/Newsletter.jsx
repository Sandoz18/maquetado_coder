import {useState} from'react';
import styles from './Newsletter.module.scss';


export const Newsletter= () =>{
    const [email, setEmail] = useState('');

    /**cargas */
    const handleSubmit = (e) => {
        e.preventDefault();
       
    };

    return (
        <div className={styles.newsletter}>
            <h3 className={styles.newsletterTitle}>Suscríbite a nuestro newsletter</h3>
            <p className={styles.newsletterSubtitle}>Recibí las mejores ofertas, consejos de viaje y mucho más</p>
            <form onSubmit={handleSubmit}>
                <input className={styles.inputNewsletter}
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className={styles.buttonSubmit} type="submit">Suscribirme</button>
            </form>
        </div>
    );
}