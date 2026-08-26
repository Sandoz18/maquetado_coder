
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Hero} from './components/Hero/Hero';
import {MainContent} from './components/MainContent/MainContent'
import { Whatsapp } from './components/Whatsapp/Whatsapp';
import {Footer} from './components/Footer/Footer';
import {AuthProvider} from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
     <BrowserRouter>
    <AuthProvider>
    <Header/>    
    <Hero/>
    <MainContent/>
    <Whatsapp/>
    <Footer/>
    </AuthProvider>
    </BrowserRouter>
    </>
  </React.StrictMode>
);







