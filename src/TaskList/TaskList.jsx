import { useDispatch, useSelector } from "react-redux";
import Task from "../Task/Task";
import css from "./TaskList.module.css";
import { selectVisibleTasks } from "../redux/selectors.js";
// import { fetchTasks } from "../redux/operations.js";
// import { useEffect } from "react";

export default function TaskList() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }),
  //   [dispatch];
  const tasks = useSelector(selectVisibleTasks);
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
