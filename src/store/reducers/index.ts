import { Task } from "..";

export type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "INCREMENT10"; payload: number };

export const reducer = (state: { count: number }, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "INCREMENT10":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export type TasksAction =
  | { type: "ADD"; payload: { id: number; text: string } }
  | { type: "EDIT"; payload: { task: Task } }
  | { type: "REMOVE"; payload: { id: number } };

export const tasksReducer = (state: Task[], action: TasksAction) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        },
      ];
    case "EDIT":
      return state.map((task: Task) => {
        if (task.id === action.payload.task.id) {
          return { ...task, text: action.payload.task.text, done: !task.done };
        }
        return task;
      });
    case "REMOVE":
      return state.filter((task: Task) => task.id !== action.payload.id);
    default:
      return state;
  }
};
