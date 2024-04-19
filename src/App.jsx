import { useEffect, useState } from "react";

// import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];


//APP code below

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-Contacts");
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return initialContacts;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("saved-Contacts", JSON.stringify(contacts)),
  //     [contacts];
  // });

  // const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactList.contacts);
  const filter = useSelector((state) => state.contactList.filter);

    const addContact = (newContact) => {
    const finalContact = { 
      ...newContact,
       id: nanoid(),
       };

    const action = {type: "contactlist/addContact", payload: finalContact };

    dispatch(action);

    // setContacts((prevContacts) => [...prevContacts, finalContact]);

      };

      

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;