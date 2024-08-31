import { toggleCompleted, deleteTask, addTask } from "../actions.js";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build task planner", completed: false },
];
const tasksReduser = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
      return [...state, action.payload];
    case deleteTask.type:
      return state.filter((task) => task.id !== action.payload);

    case toggleCompleted.type:
      return state.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, completed: !task.completed };
        })
  };
  return state;
};

export default tasksReduser;
