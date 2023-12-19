import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../hojas-de-estilo/Contacto.css';
import mapa from "./mapa.jpeg";
import Menu from "../Menu/Menu";
import Carrito from "../Carrito/Carrito";
import { useMenu } from "../Contexto/ContextoMenu";

const Contacto = () => {
  const { menuAbierto } = useMenu();
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  return (
    <section id="contacto">
      <h1 id="contacto-titulo">contacto</h1>
      <div id="contacto-contenedor">
        <img src={mapa} id="mapa-contacto" />
        <Formik
          initialValues={{
            nombre: '',
            apellido: '',
            email: '',
            asunto: ''
          }}
          validationSchema={Yup.object({
            nombre: Yup.string()
              .matches(/^[A-Za-z]+$/, 'El nombre no debe contener números')
              .required('Ingrese su nombre'),
            apellido: Yup.string()
              .matches(/^[A-Za-z]+$/, 'El apellido no debe contener números')
              .required('Ingrese su apellido'),
            email: Yup.string()
              .email('Ingrese un correo electrónico válido')
              .required('Ingrese su correo electrónico'),
            asunto: Yup.string()
          })}
          onSubmit={(values, actions) => {
            console.log('Formulario enviado:', values);
            setFormularioEnviado(true);
            actions.resetForm();
            actions.setSubmitting(false);
            setTimeout(() => {
              setFormularioEnviado(false);
            }, 5000);
          }}
        >
          <Form>
            <p id="contacto-form-titulo">formulario</p>
            <Field type="text" name="nombre" placeholder="nombre"/>
            <ErrorMessage name="nombre" component="div" className="error-mensaje-formulario"/>

            <Field type="text" name="apellido" placeholder="apellido" />
            <ErrorMessage name="apellido" component="div" className="error-mensaje-formulario"/>

            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" className="error-mensaje-formulario"/>

            <Field type="text" name="asunto" placeholder="asunto" />

            <button type="submit" id="enviar-boton">Enviar</button>
          </Form>
        </Formik>
      </div>
      <Carrito />
      <Menu />
      {formularioEnviado && (
        <div id="formulario-enviado-div">
          <h1 id="formulario-enviado-titulo">EL FORMULARIO FUE ENVIADO CORRECTAMENTE</h1>
          <p id="formulario-enviado-subtitulo">A la brevedad nos comunicaremos con usted!</p>
        </div>
      )}
    </section>
  );
};

export default Contacto;
