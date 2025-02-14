import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "../../components/Container/Container";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <Container>
      <div className={css.pageWrap}>
        <div className={css.pageTopWrap}>
          <div className={css.titleWrap}>
            <h1 className={css.pageTitle}>
              Log In to Your Account
            </h1>
          </div>
          <LoginForm />
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
