import ErrorBoundary from "../CatchError/CatchError";
import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <ErrorBoundary fallback={"smth wrong in TaskCounter"}>
          <TaskCounter />
        </ErrorBoundary>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <ErrorBoundary fallback={"smth wrong in StatusFilter"}>
          <StatusFilter />
        </ErrorBoundary>
      </section>
    </header>
  );
}
