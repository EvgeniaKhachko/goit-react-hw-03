import React from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";

let contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[0-9]+$/, "Invalid format")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <div className={s.forma}>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
        initialValues={initialValues}
      >
        <Form>
          <label className={s.label}>
            <span>Name</span>
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="name"
            />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              className={s.input}
              type="text"
              name="number"
              placeholder="number"
            />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button className={s.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
