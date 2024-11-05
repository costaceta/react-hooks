import { CounterAction } from "../reducers";

export function increment(dispatch: React.Dispatch<CounterAction>) {
  dispatch({ type: "INCREMENT" });
}

export function decrement(dispatch: React.Dispatch<CounterAction>) {
  dispatch({ type: "DECREMENT" });
}

export function increment10(
  dispatch: React.Dispatch<CounterAction>,
  value: number
) {
  dispatch({ type: "INCREMENT10", payload: value });
}

export function reset(dispatch: React.Dispatch<CounterAction>) {
  dispatch({ type: "RESET" });
}
