import Layout from "../Layout/Layout";
import AppBar from "../AppBar/AppBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import { useEffect } from "react";
import { selectTasks } from "../redux/selectors.js";
import { fetchTasks } from "../redux/tasks/tasksOperations.js";
import { useSelector, useDispatch } from "react-redux";
import ErrorBoundary from "../CatchError/CatchError.jsx";
export default function App() {

  const dispatch = useDispatch;
  const { isLoading, error, items } = useSelector(selectTasks);

  // useEffect(() => {
  //   dispatch(fetchTasks);
  // }, [dispatch]);

  return (
    <Layout>
      <ErrorBoundary fallback={"smth wrong in AppBar"}>
        <AppBar />
      </ErrorBoundary>
      <ErrorBoundary fallback={"smth wrong in TaskForm"}>
        <TaskForm />
      </ErrorBoundary>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ErrorBoundary fallback={"smth wrong in TaskList"}>
        {items.length > 0 && <TaskList />}
      </ErrorBoundary>
    </Layout>
  );
}
