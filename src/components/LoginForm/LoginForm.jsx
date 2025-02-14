import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { loginSchema } from "../../helpers/validationsSchems";
import { FaUnlockAlt } from "react-icons/fa";

const LoginForm = () => {
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={css.form}>
          <h2 className={css.title}>
            <FaUnlockAlt className={css.icon} /> Log In
          </h2>
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
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
