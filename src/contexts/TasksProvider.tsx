import { ReactNode, useReducer } from "react";

import { TasksContext, TasksDispatchContext } from "./TasksContext";
import { initialTaskState, tasksReducer } from "../store";

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTaskState);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;
