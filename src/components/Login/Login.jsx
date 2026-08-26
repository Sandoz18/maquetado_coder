import { useState } from 'react';
import styles from './Login.module.scss';
import { LoginForm }from '../LoginForm/LoginForm.jsx';
import { RegisterForm }from '../RegisterForm/RegisterForm';




export const Login =() => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);

    const [isRegisterview, setIsRegisterView] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const goToRegister = ()=>{
        setIsRegisterView(true);
    }

    const goToLogin = ()=>{
        setIsRegisterView(false);
    }

    return (
        <div className={styles.Login}>
            <div className={styles.LoginIcon} onClick={toggleModal}>
                { isModalOpen && (
                    <div className={styles.Modal}>
                        {isRegisterview ? (
                            <RegisterForm />
                        ) : (
                            <LoginForm />
                        )}
                    </div>
                )}
                {isLogged ? (
                    
                    <i className="login-img bi bi-person-check-fill"> {user?.name || 'Mi Perfil'}</i>
                ) : (
                    <i className="login-img bi bi-person-fill"></i>
                )}
            </div>
        </div>
    );
};