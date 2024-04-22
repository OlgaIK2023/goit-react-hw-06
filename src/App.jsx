// import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";

import {deleteContact,setFilter} from "./redux/contactlistReducer";

// const initialContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

//APP code below

function App() {
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList/>
    </div>
  );
}

export default App;
