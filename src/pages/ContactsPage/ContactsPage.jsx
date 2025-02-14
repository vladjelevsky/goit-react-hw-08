import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors.js";
import { fetchContacts } from "../../redux/contacts/operations.js";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { FaAddressBook } from "react-icons/fa";
import css from "./ContactsPage.module.css";
import Container from "../../components/Container/Container.jsx";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn.jsx";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <div className={css.pageTopWrap}>
        <div className={css.titleWrap}>
          <h1 className={css.pageTitle}>
            <FaAddressBook className={css.titleIcon} />
            Phone<span className={css.titleAccent}>Book</span>
          </h1>
        </div>
        <ContactForm />
      </div>
      <SearchBox />
      {isLoading && !isError && <Loader />}
      {isError && (
        <p className={css.error}>
          Something went wrong...
          <span className={css.errorMessage}>
            Please check your internet connection
          </span>
        </p>
      )}
      <ContactList />
      <ScrollTopBtn />
    </Container>
  );
};

export default ContactsPage;
