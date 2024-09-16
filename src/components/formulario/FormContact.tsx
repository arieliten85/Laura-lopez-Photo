import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./formContact.css";
import React from "react";

export const FormContact: React.FC = () => {
  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    nombre: Yup.string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .required("Nombre es obligatorio"),
    correo: Yup.string()
      .email("Correo electrónico inválido")
      .required("Correo electrónico es obligatorio"),
    telefono: Yup.string()
      .matches(/^[0-9]+$/, "El teléfono solo debe contener números")
      .min(10, "El teléfono debe tener al menos 10 dígitos")
      .required("Teléfono es obligatorio"),
    mensaje: Yup.string()
      .min(10, "El mensaje debe tener al menos 10 caracteres")
      .required("El mensaje es obligatorio"),
  });

  return (
    <Formik
      initialValues={{ nombre: "", correo: "", telefono: "", mensaje: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formulario enviado:", values);
        resetForm();
      }}
    >
      {() => (
        <Form className="form-contact" data-test="form-contact">
          <div className="campo">
            <Field
              name="nombre"
              type="text"
              placeholder="Nombre"
              data-test="field-nombre"
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className="error"
              data-test="error-nombre"
            />
          </div>

          <div className="campo">
            <Field
              name="correo"
              type="email"
              placeholder="Correo Electrónico"
              data-test="field-correo"
            />
            <ErrorMessage
              name="correo"
              component="div"
              className="error"
              data-test="error-correo"
            />
          </div>

          <div className="campo">
            <Field
              name="telefono"
              type="tel"
              placeholder="Teléfono"
              data-test="field-telefono"
            />
            <ErrorMessage
              name="telefono"
              component="div"
              className="error"
              data-test="error-telefono"
            />
          </div>

          <div className="campo">
            <Field
              name="mensaje"
              as="textarea"
              rows="4"
              placeholder="Mensaje"
              data-test="field-mensaje"
            />
            <ErrorMessage
              name="mensaje"
              component="div"
              className="error"
              data-test="error-mensaje"
            />
          </div>

          <button
            type="submit"
            className="customButton contact-session-button"
            data-test="submit-button"
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};
