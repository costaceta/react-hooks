import React from "react";
import { Task, TaskAction } from "../reducers";

// TODO: user uuidv4
let nextId = 3;
export function addTask(dispatch: React.Dispatch<TaskAction>, text: string) {
  dispatch({ type: "ADD", payload: { id: nextId++, text } });
}
export function editTask(dispatch: React.Dispatch<TaskAction>, task: Task) {
  dispatch({ type: "EDIT", payload: { task } });
}

export function removeTask(dispatch: React.Dispatch<TaskAction>, id: number) {
  dispatch({ type: "REMOVE", payload: { id } });
}
