import styles from './NavLinks.module.scss';
import Logo from '../../assets/logo.png';


export const NavLinks = ()=>{
    const items = [
        { href: "#destinos", label: "Destinos" },
        { href: "#actividades", label: "Actividades" },
        { href: "#informacion", label: "Información" },
        { href: "#contact", label: "Contacto" }
    ];
    return(
        <nav className={styles.nav}>
            <ul className={styles.navList}>                
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
           
        </nav>
    )
}













export default NavLinks