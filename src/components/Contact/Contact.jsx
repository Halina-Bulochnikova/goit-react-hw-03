import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <FaUserAlt /> {name} <FaPhone /> {number}
      <button onClick={() => onDelete(id)}>
        DELETE
      </button>
    </li>
  );
};

export default Contact;
