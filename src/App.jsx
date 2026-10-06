import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Inicio } from './components/Home/Inicio';
import { Whatsapp } from './components/Whatsapp/Whatsapp';
import { Footer } from './components/Footer/Footer';
import { Destinos } from './components/Destinos/Destinos';
import {Actividades} from './components/Actividades/Actividades';
import {Informacion}from './components/Informacion/Informacion';
import {TodasLasAtracciones} from './components/TodasLasAtracciones/TodasLasAtracciones';

export function App() {
    return (

        <>
            <Header />
            <Whatsapp/>

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Destinos" element={<Destinos />} />
                <Route path="/Actividades" element={<Actividades/>} />
                 <Route path="/Informacion" element={<Informacion/>} />
                 <Route path="/TodasLasAtracciones" element={<TodasLasAtracciones/>} />
            </Routes>

            <Footer />
        </>

    );
}


