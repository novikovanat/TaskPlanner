import Button from '../Button/Button';
import {postTask} from '../redux/tasks/tasksOperations.js';
import css from './TaskForm.module.css';
import { useDispatch } from 'react-redux';

export default function TaskForm(){
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form.elements.text.value)
    dispatch(postTask(form.elements.text.value))
    form.reset();
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
};
