export type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "INCREMENT10"; payload: number };

export const reducer = (state: { count: number }, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "INCREMENT10":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
