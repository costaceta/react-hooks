import { Dispatch, createContext } from "react";
import { Task } from "../store";
import { TasksAction } from "../store/reducers";


export const TasksContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext<Dispatch<TasksAction>>(() => {});