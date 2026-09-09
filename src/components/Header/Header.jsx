import React from 'react';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu.jsx';
import { Login } from '../Login/Login.jsx';
import Logo from '../../assets/logo-01.png';
import NavLinks from '../NavLinks/NavLinks.jsx';
import {Link} from 'react-router-dom';

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/">
                <img className={styles.logo} src={Logo} alt="Logo" />
                </Link>
            </div>
            <BurgerMenu />
            <div className={styles.desktopNav}>
                <NavLinks />
            </div>
            <Login />
        </header>
    )

}


