import { Task } from "..";
import { TasksAction } from "../reducers";

let nextID = 3;
export function addTask(dispatch: React.Dispatch<TasksAction>, text: string) {
  dispatch({ type: "ADD", payload: { id: nextID++, text } });
}

export function editTask(dispatch: React.Dispatch<TasksAction>, task: Task) {
  dispatch({ type: "EDIT", payload: { task } });
}

export function removeTask(dispatch: React.Dispatch<TasksAction>, id: number) {
  dispatch({ type: "REMOVE", payload: { id } });
}
