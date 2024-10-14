import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (
  state: { count: number },
  action: { type: string; payload?: number }
) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "INCREMENT10":
      return { count: state.count + (action.payload ?? 0) };
    default:
      return state;
  }
};

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2 className="text-3xl p-2 font-bold">Counter: {state.count}</h2>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "INCREMENT10", payload: 10 })}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Increment 10
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterReducer;
