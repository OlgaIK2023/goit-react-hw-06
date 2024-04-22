import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from 'react-redux'

// import {selectContacts } from '../../redux/contactsSlice'
// import { selectNameFilter } from "../../redux/filtersSlice"

const ContactList = () => {
  
  const contacts = useSelector((state) => state.contactList.contacts);
  const filter = useSelector((state) => state.contactList.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

 

  return (
    <ul className={css.list}>
      {filteredContacts.length === 0 ? (
        <p>You do not have any contacts!</p>
      ) : (
        filteredContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
            />
          );
        })
      )}
    </ul>
  );
};

export default ContactList;