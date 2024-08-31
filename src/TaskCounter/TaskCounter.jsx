import { selectTasks } from "../redux/selectors";
import css from "./TaskCounter.module.css";
import { useSelector } from "react-redux";

const TaskCounter = () => {
  const tasks = useSelector(selectTasks);
  const countedTasks = tasks.reduce(
    (accumulator, task) => {
      if (task.complited) {
        accumulator.complited += 1;
      } else {
        accumulator.active += 1;
      }
      return accumulator;
    },
    { active: 0, complited: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active:{countedTasks.active} </p>
      <p className={css.text}>Completed: {countedTasks.complited}</p>
    </div>
  );
};

export default TaskCounter;
