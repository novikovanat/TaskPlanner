import { useSelector } from "react-redux";
import Task from "../Task/Task";
import css from "./TaskList.module.css";
import getVisibleTasks from "../utils/getVisibleTasks.js";
import { selectTasks } from "../redux/selectors.js";

export default function TaskList() {
  const tasks = useSelector(selectTasks);
  
  // const statusFilter = useSelector((state) => state.filter);
  // const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
