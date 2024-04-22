
import css from "./SearchBox.module.css";
import {useSelector,useDispatch} from 'react-redux'
import { setFilter, selectNameFilter } from '../../redux/filtersSlice'


const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectNameFilter);

   const onChangeFilter = (event) => {
    const action = setFilter(event.target.value);

    dispatch(action);
  };


  return (
    <label className={css.label}>
      Finde contacts by name
      <input placeholder="Search..." value={filters} onChange={onChangeFilter} />
    </label>
  );
};

export default SearchBox;