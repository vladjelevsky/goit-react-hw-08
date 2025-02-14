import { Formik, Form, Field, ErrorMessage } from "formik";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { phonebookSchema } from "../../helpers/validationsSchems";
import { MdAddIcCall } from "react-icons/md";


const ContactForm = () => {
  const initialValues = { name: "", number: "" };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={phonebookSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>
          <MdAddIcCall className={css.icon} /> New contact
        </h2>
        <div className={css.fieldWrapper}>
          <label htmlFor="name" className={css.label}>
            Name
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
            Number
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
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
