import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  multiplyByAmount,
} from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  // value of addValue variable ( that we get from user input)  -  is payload for incrementByAmount action
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    // reset global state
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>

        <button onClick={() => dispatch(multiplyByAmount(addValue))}>
          Multiply Amount
        </button>
        <button onClick={resetAll}>ResetAll</button>
      </div>
    </section>
  );
};

export default Counter;
