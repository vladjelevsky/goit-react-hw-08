import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { ImSearch } from "react-icons/im";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <h2 className={css.title}>
        <ImSearch className={css.icon} /> Find contacts
      </h2>
      <input
        className={css.input}
        type="text"
        name="search"
        id="search"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Try search by name or number"
        aria-label="Search contacts by name or phone number"
      />
    </div>
  );
};

export default SearchBox;
