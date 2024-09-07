import Layout from "../Layout/Layout";
import AppBar from "../AppBar/AppBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import ErrorBoundary from "../CatchError/CatchError.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../redux/operations.js";

 function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }), [dispatch];

  return (
    <Layout>
      <ErrorBoundary fallback={"smth wrong in AppBar"}>
        <AppBar />
      </ErrorBoundary>
      <ErrorBoundary fallback={"smth wrong in TaskForm"}>
        <TaskForm />
      </ErrorBoundary>

      <p>Loading...</p>

      <ErrorBoundary fallback={"smth wrong in TaskList"}>
        <TaskList />
      </ErrorBoundary>
    </Layout>
  );
}

export default App;