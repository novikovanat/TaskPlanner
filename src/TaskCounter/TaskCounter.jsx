import { selectTasksCount } from "../redux/selectors";
import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";

const TaskCounter = () => {
  const counted = useSelector(selectTasksCount);

  return (
    <div>
      <p className={css.text}>Active:{counted.active} </p>
      <p className={css.text}>Completed: {counted.completed}</p>
    </div>
  );
};

export default TaskCounter;
