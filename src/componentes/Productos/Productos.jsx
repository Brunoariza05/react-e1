// Products.js
import React, { useState } from "react";
import ProductosTemplate from "./ProductosTemplate";
import '../hojas-de-estilo/Products.css';
import Carrito from "../Carrito/Carrito";
import { useMenu } from "../Contexto/ContextoMenu";
import { useCarrito } from "../Contexto/ContextoCarrito";
import Menu from "../Menu/Menu";
import { useCarritoContenido } from "../Contexto/ContextoCarritoContenido";

const Products = () => {
  const { menuAbierto } = useMenu();
  const { carritoAbierto } = useCarrito();
  const { agregarAlCarrito, carrito, mostrarAvisoCarritoVacio } = useCarritoContenido();

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  const [mostrarAviso, setMostrarAviso] = useState(false);

  const handleClickCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const handleAviso = () => {
    setMostrarAviso(true);
    setTimeout(() => setMostrarAviso(false), 4000);
  };

  const productos = [
    {titulo: "El Principito", imagen: "/imagenes/principito.webp", precio: "25000", categoria: "infantiles", id: 1, cantidad: 0},
    {titulo: "La Biblia", imagen: "/imagenes/biblia.webp", precio: "20000", categoria: "historicos", id: 2, cantidad: 0},
    {titulo: "Ana Frank", imagen: "/imagenes/ana.jpg", precio: "23000", categoria: "historicos", id: 3, cantidad: 0},
    {titulo: "100 Años De Soledad", imagen: "/imagenes/soledad.webp", precio: "15000", categoria: "fantasia", id: 4, cantidad: 0},
    {titulo: "Martin Fierro", imagen: "/imagenes/fierro.webp", precio: "10000", categoria: "historicos", id: 5, cantidad: 0},
    {titulo: "El Señor De Los Anillos", imagen: "/imagenes/señor.webp", precio: "19000", categoria: "fantasia", id: 6, cantidad: 0},
    {titulo: "Harry Potter 1", imagen: "/imagenes/harry1.webp", precio: "30000", categoria: "fantasia", id: 7, cantidad: 0},
    {titulo: "Harry Potter 2", imagen: "/imagenes/harry2.webp", precio: "30000", categoria: "fantasia", id: 8, cantidad: 0},
    {titulo: "Harry Potter 3", imagen: "/imagenes/harry3.webp", precio: "30000", categoria: "fantasia", id: 9, cantidad: 0},
    {titulo: "Harry Potter 4", imagen: "/imagenes/harry4.webp", precio: "30000", categoria: "fantasia", id: 10, cantidad: 0},
    {titulo: "Harry Potter 5", imagen: "/imagenes/harry5.webp", precio: "30000", categoria: "fantasia", id: 11, cantidad: 0},
    {titulo: "Harry Potter 6", imagen: "/imagenes/harry6.webp", precio: "30000", categoria: "fantasia", id: 12, cantidad: 0}
];
  const productosFiltrados =
    categoriaSeleccionada === 'todos'
      ? productos
      : productos.filter((producto) => producto.categoria === categoriaSeleccionada);

  return (
    <section className="products" id="PRODUCTOS">
      <h2 id="titulo-destacados">nuestros productos</h2>
      <div id="categorias-contenedor">
        <ul>
          <li className="categorias-button" onClick={() => handleClickCategoria('todos')}
            id={categoriaSeleccionada === 'todos' ? 'categoria-selected' : ''}>todos</li>
          <li className="categorias-button" onClick={() => handleClickCategoria('historicos')}
            id={categoriaSeleccionada === 'historicos' ? 'categoria-selected' : ''}>historicos</li>
          <li className="categorias-button" onClick={() => handleClickCategoria('fantasia')}
            id={categoriaSeleccionada === 'fantasia' ? 'categoria-selected' : ''}>fantasia</li>
          <li className="categorias-button" onClick={() => handleClickCategoria('infantiles')}
            id={categoriaSeleccionada === 'infantiles' ? 'categoria-selected' : ''}>infantiles</li>
        </ul>
      </div>
      <div className="contenedor-productos">
        {productosFiltrados.map((product, index) => (
          <ProductosTemplate
            key={index}
            {...product}
            agregarAlCarrito={() => {
              agregarAlCarrito(product);
              handleAviso();
            }}
            producto={product}
          />
        ))}
      </div>
      <Carrito className="espacio" carrito={carrito} agregarAlCarrito={agregarAlCarrito} />
      <Menu />
      {mostrarAviso && (
        <div id="aviso-producto-agregado">
          <h1>¡PRODUCTO AGREGADO AL CARRITO!</h1>
        </div>
      )}
      {mostrarAvisoCarritoVacio && (
        <div id="aviso-carrito-limpio">
          <h1>¡EL CARRITO SE HA LIMPIADO!</h1>
        </div>
      )}
    </section>
  )
};

export default Products;
