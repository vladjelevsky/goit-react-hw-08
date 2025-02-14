import ReactDOM from "react-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcOk, FcCancel } from "react-icons/fc";
import css from "./EditContactModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import useCloseModal from "../../helpers/hooks/useCloseModal";
import { phonebookSchema } from "../../helpers/validationsSchems";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";

const modalRoot = document.querySelector("#modal-root");

const EditContactModal = ({ id, onClose }) => {
  const contact = useSelector(selectContacts);
  const contactValues = contact.find((contact) => contact.id === id);

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      editContact({
        contactId: id,
        body: { name: values.name, number: values.number },
      })
    );
    actions.resetForm();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };
  const { handleBackdropClick } = useCloseModal(onClose);

  return ReactDOM.createPortal(
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <Formik
        initialValues={{
          name: contactValues.name,
          number: contactValues.number,
        }}
        onSubmit={handleSubmit}
        validationSchema={phonebookSchema}
        enableReinitialize
      >
        <Form className={css.form}>
          <h2 className={css.title}>
            <GrEdit className={css.icon} /> Edit Contact
          </h2>
          <div className={css.fieldWrapper}>
            <label htmlFor="name" className={css.label}>
              <FaUser className={css.contactIcon} />
            </label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id="name"
              autoComplete="name"
            ></Field>
            <ErrorMessage name="name" component="p" className={css.error} />
          </div>
          <div className={css.fieldWrapper}>
            <label htmlFor="number" className={css.label}>
              <FaPhoneAlt className={css.contactIcon} />
            </label>
            <Field
              className={css.field}
              type="text"
              name="number"
              id="number"
              autoComplete="number"
            ></Field>
            <ErrorMessage name="number" component="p" className={css.error} />
          </div>
          <div className={css.btnPanel}>
            <button type="submit" className={css.btn}>
              Edit
              <FcOk size="30px" />
            </button>
            <button type="button" className={css.btn} onClick={handleCancel}>
              Cancel <FcCancel size="30px" />
            </button>
          </div>
        </Form>
      </Formik>
    </div>,
    modalRoot
  );
};

export default EditContactModal;
