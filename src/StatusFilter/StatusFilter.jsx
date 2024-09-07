import Button from "../Button/Button";
import { setStatusFilter } from "../redux/filters/filtersSlice.js";
import { statusFilters } from "../redux/constants";
import { selectFilterStatus } from "../redux/selectors";
import css from "./StatusFilter.module.css";
import { useSelector, useDispatch } from "react-redux";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterStatus);
  const handlefilterChange = (filter) => {
    console.log(filter)
    // dispatch(setStatusFilter(filter));
  };
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handlefilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handlefilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.complited}
        onClick={() => handlefilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
