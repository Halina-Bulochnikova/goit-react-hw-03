import css from "../App/App.module.css";
import ContactList from '../ContactList/ContactList';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import contacts from '../contacts.json';


const App = () => {

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactList
          id={contacts.id}
          name={contacts.name}
          number={contacts.number}
        />
        <ContactForm />
        <SearchBox />
        
      </div>
    );
  };
 export default App;

