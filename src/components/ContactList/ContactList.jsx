import React from "react";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, onDelete }) {
  return (
    <u>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </u>
  );
}
export default ContactList;

