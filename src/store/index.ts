import { reducer } from "./reducers";

const initialState = {
  count: 0,
};

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

const initialTaskState: Task[] = [
  {
    id: 1,
    text: "Tarefa 1",
    done: false,
  },
  {
    id: 2,
    text: "Tarefa 2",
    done: false,
  },
  {
    id: 3,
    text: "Tarefa 3",
    done: false,
  },
];

export { initialState, initialTaskState, reducer };
