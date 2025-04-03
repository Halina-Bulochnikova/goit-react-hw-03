import css from "../App/App.module.css";
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import contacts from '../contacts.json';
import React from "react";


const App = () => {

  

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactList contacts={contacts} />
        <ContactForm />
        <SearchBox />
      </div>
    );
  };
 export default App;

