import Layout from "../Layout/Layout";
import AppBar from "../AppBar/AppBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import ErrorBoundary from "../CatchError/CatchError.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/operations.js";
import { selectError, selectLoadingStatus } from "../redux/selectors.js";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(fetchTasks());
  }),
    [dispatch];

  return (
    <Layout>
      <ErrorBoundary
        fallback={"AppBar temporary lost in a void. Have a nice day"}
      >
        <AppBar />
      </ErrorBoundary>
      <ErrorBoundary fallback={"Here must be TaskForm"}>
        <TaskForm />
      </ErrorBoundary>
      <ErrorBoundary fallback={"Here must be TaskList"}>
        {error && <p>{error}</p>}
        {isLoading ? <p>Loading...</p> : <TaskList />}
      </ErrorBoundary>
    </Layout>
  );
};

export default App;