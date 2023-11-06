import './App.css';
import Nav from './componentes/Nav';
import Hero from './componentes/Hero';
import Products from './componentes/Products';
import Footer from './componentes/Footer';
import Hero2 from './componentes/Hero2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
    <Nav />
    <hr/>
    <Hero />
    <hr/>
    <Hero2 />
    <hr/>
    <Products />
    <hr/>
    <Footer /> 
    </>
  );
}

export default App;
