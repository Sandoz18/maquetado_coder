
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/global.scss';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {App} from './App';
import {AuthProvider} from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <BrowserRouter>
    <AuthProvider>
      <App/>
    </AuthProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);







