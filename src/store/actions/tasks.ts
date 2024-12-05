import { Dispatch } from "react";
import { Task } from "..";
import { TasksAction } from "../reducers";

let nextID = 3;
export function addTask(dispatch: Dispatch<TasksAction>, text: string) {
  nextID++;

  dispatch({ type: "ADD", payload: { id: nextID, text } });
}

export function editTask(dispatch: Dispatch<TasksAction>, task: Task) {
  dispatch({ type: "EDIT", payload: { task } });
}

export function removeTask(dispatch: Dispatch<TasksAction>, id: number) {
  dispatch({ type: "REMOVE", payload: { id } });
}
