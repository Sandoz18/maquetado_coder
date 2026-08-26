import React from 'react';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu.jsx';
import { Login } from '../Login/Login.jsx';
import Logo from '../../assets/logo-01.png';
import NavLinks from '../NavLinks/NavLinks.jsx';

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={Logo} alt="Logo" />
            </div>
            <BurgerMenu />
            <div className={styles.desktopNav}>
                <NavLinks />
            </div>
            <Login />
        </header>
    )

}


