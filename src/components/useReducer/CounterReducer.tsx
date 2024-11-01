import { useReducer } from "react";

import { initialState, reducer } from "../../store";
import { increment, decrement, increment10, reset } from "../../store/actions";

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2 className="text-3xl p-2 font-bold">Counter: {state.count}</h2>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => increment(dispatch)}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Increment
        </button>
        <button
          onClick={() => decrement(dispatch)}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => increment10(dispatch, 10)}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Increment 10
        </button>
        <button
          onClick={() => reset(dispatch)}
          className="rounded-full bg-blue-500 px-5 py-2 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterReducer;