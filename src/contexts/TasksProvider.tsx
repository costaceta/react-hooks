import { useReducer } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";
import { tasksReducer } from "../store/reducers";
import { initialTaskState } from "../store";

const TasksProvider = ({ children }: { children: React.ReactNode }) => {
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
