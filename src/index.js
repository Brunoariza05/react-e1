import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProveedorMenu } from './componentes/Contexto/ContextoMenu';
import { ProveedorCarrito } from './componentes/Contexto/ContextoCarrito';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProveedorCarrito>
    <ProveedorMenu>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    </BrowserRouter>
    </ProveedorMenu>
    </ProveedorCarrito>
  </React.StrictMode>
);
