import styles from './NavLinks.module.scss';
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';



export const NavLinks = ()=>{
    const items = [
        { to: "destinos", label: "Destinos" },
        { to: "actividades", label: "Actividades" },
        { to: "informacion", label: "Información" },
        { to: "contact", label: "Contacto" }
    ];
    return(
        <nav className={styles.nav}>
            <ul className={styles.navList}>                
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.to}>{item.label}</Link>
                    </li>
                ))}
            </ul>
           
        </nav>
    )
}













export default NavLinks