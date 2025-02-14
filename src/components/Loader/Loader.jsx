import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <Circles
        height="80"
        width="80"
        color="#dce9f5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
