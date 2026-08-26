import { useState } from 'react';
import { NavLinks } from '../NavLinks/NavLinks.jsx';
import styles from './BurgerMenu.module.scss';


export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.burgerMenu}>
            <button className={styles.burgerButton}
                onClick={handleToggle}>
                <i className="bi bi-list"></i>
            </button>

            {
                isOpen && (
                    <aside className={styles.modalAside}>
                        {
                            <NavLinks />
                        }
                        <button className={styles.closeButton} onClick={handleToggle}>
                            <i className="bi bi-x-lg"></i>
                        </button>


                    </aside>
                )}



        </div>
    );
};

