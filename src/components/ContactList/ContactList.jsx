import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <ul className={css.contactList}>
      {filteredContacts.length === 0 && !isLoading ? (
        <p className={css.message}>No contacts</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={css.contactItem}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
