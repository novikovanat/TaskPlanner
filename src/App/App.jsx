import Layout from "../Layout/Layout";
import AppBar from "../AppBar/AppBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import { useEffect } from "react";
import { selectTasks } from "../redux/selectors.js";
import { fetchTasks } from "../redux/tasks/tasksOperations.js";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch;
  const { isLoading, error, items } = useSelector(selectTasks);
  useEffect(() => {
    dispatch(fetchTasks);
  }, [dispatch]);
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <TaskList />}
    </Layout>
  );
};

export default App;
