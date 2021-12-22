import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(5);

  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>

      <span>{count}</span>

      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <label>
        Amount:
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={({ target: { value } }) => setIncrementAmount(value)}
        />
      </label>

      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
        Add Amount
      </button>
    </div>
  );
}
