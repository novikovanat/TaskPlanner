import { statusFilters } from "../redux/constants";

export default function getVisibleTasks(tasks, statusFilter) {
  switch (statusFilter) {
    case statusFilters.active: 
      return tasks.filter(task =>!task.complited);
    case statusFilters.completed:
        return tasks.filter(task =>task.completed)
    default:
        return tasks
  }
}
