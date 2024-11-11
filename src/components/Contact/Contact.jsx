import React from "react";
import s from "./Contact.module.css";
const Contact = ({ name, number, onDelete, id }) => {
  return (
    <div>
      <p>{name}</p>
      <p> {number}</p>
      <button onClick={() => onDelete(id)}> Delete</button>
    </div>
  );
};

export default Contact;
