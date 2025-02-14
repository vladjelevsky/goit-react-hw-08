import Container from "../../components/Container/Container";
import css from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <div className={css.pageWrap}>
        <div className={css.pageTopWrap}>
          <div className={css.titleWrap}>
            <h1 className={css.pageTitle}>
              PhoneBook
            </h1>
          </div>
        </div>

        {!isLoggedIn && (
          <div className={css.pageInform}>
            <p className={css.accent}>Don&#39;t have an account yet?</p>
            <div className={css.informText}>
              <p>Create your profile</p>
              <Link className={css.link} to="/register">
                now
              </Link>
              <p>and start managing your contacts effortlessly.</p>
            </div>
            <div className={css.informText}>
              <p>Already have an account?</p>
              <Link className={css.link} to="/login">
                Welcome back!
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default HomePage;
