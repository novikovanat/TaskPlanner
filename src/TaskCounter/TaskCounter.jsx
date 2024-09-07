import { tempTasks } from "../redux/constants";
import { selectTasks } from "../redux/selectors";
import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";

const TaskCounter = () => {
  // const tasks = useSelector(selectTasks);
  const countedTasks = tempTasks.reduce(
    (accumulator, task) => {
      if (task.completed) {
        accumulator.completed += 1;
      } else {
        accumulator.active += 1;
      }
      return accumulator;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active:{countedTasks.active} </p>
      <p className={css.text}>Completed: {countedTasks.completed}</p>
    </div>
  );
};

export default TaskCounter;
