import { useSelector} from "react-redux";
import { selectTasks } from "../redux/selectors.js";
import Task from "../Task/Task";
import css from "./TaskList.module.css";
import getVisibleTasks from "../utils/getVisibleTasks.js";

const TaskList = () => {
 
const {items} = useSelector(selectTasks)
  const statusFilter = useSelector((state) => state.filter);
  const visibleTasks = getVisibleTasks(items, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
