import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, toggle } from "../redux/operations.js";

const Task = ({ task: { id: taskId, text, completed: isCompleted } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(taskId));
  const handleToggle = (event) => {
    const toggleInfo = [event.target.checked, taskId];
    dispatch(toggle(toggleInfo));
  };
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={isCompleted}
      />
      <p className={css.text}>{text}</p>

      <button className={css.btn} onClick={handleDelete} type="button">
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
