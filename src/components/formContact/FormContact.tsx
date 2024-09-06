import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./FormContact.css";

export const FormContact = () => {
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
        <Form className="form-contact">
          <div className="campo">
            <Field name="nombre" type="text" placeholder="Nombre" />
            <ErrorMessage name="nombre" component="div" className="error" />
          </div>

          <div className="campo">
            <Field
              name="correo"
              type="email"
              placeholder="Correo Electrónico"
            />
            <ErrorMessage name="correo" component="div" className="error" />
          </div>

          <div className="campo">
            <Field name="telefono" type="tel" placeholder="Teléfono" />
            <ErrorMessage name="telefono" component="div" className="error" />
          </div>

          <div className="campo">
            <Field
              name="mensaje"
              as="textarea"
              rows="4"
              placeholder="Mensaje"
            />
            <ErrorMessage name="mensaje" component="div" className="error" />
          </div>

          <button type="submit" className="customButton contact-session-button">
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};
