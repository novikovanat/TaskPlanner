import Button from "../Button/Button";
import { postTask } from "../redux/operations.js";
import css from "./TaskForm.module.css";
import { useDispatch } from "react-redux";

export default function TaskForm() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const taskText = event.target.elements.text.value;
    dispatch(postTask(taskText));
    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
}
