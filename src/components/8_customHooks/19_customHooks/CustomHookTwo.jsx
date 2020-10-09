import React from 'react';
import useCounter from './hooks/useCounter';

function CustomHookTwo() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <h3>Count={count}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CustomHookTwo;
