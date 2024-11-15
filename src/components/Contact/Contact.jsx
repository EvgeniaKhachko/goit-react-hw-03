import React from "react";
import s from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <div className={s.div}>
      <p className={s.user}>
        {" "}
        <RiContactsFill className={s.riContact} /> {name}
      </p>
      <p className={s.user}>
        <FaPhone className={s.faPhone} />
        {number}
      </p>
      <button className={s.button} onClick={() => onDelete(id)}>
        {" "}
        Delete
      </button>
    </div>
  );
};

export default Contact;
