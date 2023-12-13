import './App.css';
import Navbar from './componentes/Header/Navbar';
import Hero from './componentes/Home/Hero';
import Products from './componentes/Productos/Productos';
import Footer from './componentes/Footer/Footer';
import Hero2 from './componentes/Home/Hero2';
import Contacto from './componentes/Contacto/Contacto';
import { CarritoProvider } from './componentes/Contexto/ContextoCarritoContenido';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <CarritoProvider>
    <Navbar />
    <Routes>
      <Route path='' element={<Hero />}/>
      <Route path='/Hero' element={<Hero />}/>
      <Route path='/Hero2' element={<Hero2 />}/>
      <Route path='/PRODUCTOS' element={<Products/>}/>
      <Route path='/CONTACTO' element={<Contacto />}/>
    </Routes>
    <Footer /> 
    </CarritoProvider>
    </>
  );
}

export default App;