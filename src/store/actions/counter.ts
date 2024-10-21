import { Action } from "../reducers";

export function increment(dispatch: React.Dispatch<Action>) {
  dispatch({ type: "INCREMENT" });
}

export function decrement(dispatch: React.Dispatch<Action>) {
  dispatch({ type: "DECREMENT" });
}

export function increment10(dispatch: React.Dispatch<Action>, value: number) {
  dispatch({ type: "INCREMENT10", payload: value });
}

export function reset(dispatch: React.Dispatch<Action>) {
  dispatch({ type: "RESET" });
}
