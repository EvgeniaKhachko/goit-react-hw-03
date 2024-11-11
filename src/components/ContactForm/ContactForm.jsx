import React from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { Field, Formik, Form } from "formik";
import s from "./ContactForm.module.css";

let contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Поле не може бути менше ніж 3 символи")
    .max(50, "Поле не може бути більше ніж 50 символи")
    .required("Це поле обов'язкове"),
  number: Yup.string()
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number must be at most 50 characters")
    .required(),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  return (
    <div className={s.forma}>
      <Formik
        validationSchema={contactSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form onSubmit={handleSubmit}>
          <label className={s.label}>
            <span>Name</span>
            <Field type="text" name="name" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field type="phone" name="number" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
