import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../components/Container/Container";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <Container>
      <div className={css.pageWrap}>
        <div className={css.pageTopWrap}>
          <div className={css.titleWrap}>
            <h1 className={css.pageTitle}>
              Create <span className={css.accent}>Your Account</span>
            </h1>
          </div>
          <RegistrationForm />
        </div>
      </div>
    </Container>
  );
};

export default RegistrationPage;
