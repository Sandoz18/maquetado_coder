import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../assets/logo-01.png';
import NavLinks from '../NavLinks/NavLinks';

export const socialLinks = [
    { href: "#", label: 'Facebook', iconClass: 'bi bi-facebook' },
    { href: "#", label: 'Instagram', iconClass: 'bi bi-instagram' },
    { href: "#", label: 'TikTok', iconClass: 'bi bi-tiktok' }
]

export const Footer = () => {
    console.log("Se renderiza el footer bb");
    return (
        <footer className={styles.footer}>

            <div className={styles.LogoContainer}>
                <img className={styles.logo} src={Logo} alt="Logo" />
            </div>

            <div className={styles.centerContainer}>
                <h4 className={styles.mapaSitio}>MAPA DEL SITIO</h4>
                <NavLinks />
                <div className={styles.terms}>
                    <a href="/terminos-y-condiciones" className={styles.link}>Términos y Condiciones</a>
                </div>
                <p className={styles.copy}>&copy; 2026 Wunderlust. All rights reserved.</p>
            </div>

            <div className={styles.social}>
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        <i className={link.iconClass}></i>
                    </a>
                ))}
            </div>
        </footer>
    )
}

