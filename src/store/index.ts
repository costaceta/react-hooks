import { Task, counterReducer, tasksReducer } from "./reducers";

const initialState = {
  count: 0,
};

const initialTasks: Task[] = [
  { id: 0, text: "Imprimir relatório", done: false },
  { id: 1, text: "Enviar relatório", done: false },
  { id: 2, text: "Enviar email de orçamento", done: false },
];

export { initialState, initialTasks, counterReducer as reducer, tasksReducer };
