import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { registrationSchema } from "../../helpers/validationsSchems";
import { FaKey } from "react-icons/fa6";

const RegistrationForm = () => {
  const initialValues = { name: "", email: "", password: "" };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>
          <FaKey className={css.icon} /> Registration
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
            autoComplete="on"
          ></Field>
          <ErrorMessage name="name" component="p" className={css.error} />
        </div>
        <div className={css.fieldWrapper}>
          <label htmlFor="email" className={css.label}>
            Email
          </label>
          <Field
            className={css.field}
            type="email"
            name="email"
            id="email"
            autoComplete="on"
          ></Field>
          <ErrorMessage name="email" component="p" className={css.error} />
        </div>
        <div className={css.fieldWrapper}>
          <label htmlFor="password" className={css.label}>
            Password
          </label>
          <Field
            className={css.field}
            type="password"
            name="password"
            id="password"
            autoComplete="off"
          ></Field>
          <ErrorMessage name="password" component="p" className={css.error} />
        </div>
        <button type="submit" className={css.btn}>
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
