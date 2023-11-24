import './App.css';
import Navbar from './componentes/Header/Navbar';
import Hero from './componentes/Home/Hero';
import Products from './componentes/Productos/Productos';
import Footer from './componentes/Footer/Footer';
import Hero2 from './componentes/Home/Hero2';
import Contacto from './componentes/Contacto/Contacto';
import { Route, Routes } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/Hero' element={<Hero />}/>
      <Route path='/Hero2' element={<Hero2 />}/>
      <Route path='/PRODUCTOS' element={<Products />}/>
      <Route path='/CONTACTO' element={<Contacto />}/>
    </Routes>
    {/* <Hero />
    <Hero2 />
    <Products />
    <Contacto /> */}
    <Footer /> 
    </>
  );
}

export default App;
