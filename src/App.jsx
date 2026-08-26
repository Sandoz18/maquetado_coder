import { Routes, Route } from 'React-router-dom';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Footer } from './components/Footer/Footer';


export function App() {
    return (

        <>
            <Header />

            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </>

    );
}


