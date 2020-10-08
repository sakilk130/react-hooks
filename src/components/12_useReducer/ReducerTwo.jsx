import React, { useReducer } from 'react';
const initial = {
  firstCounter: 0,
  secoundCounter: 20,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value };
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value };
    case 'increment2':
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case 'decrement2':
      return { ...state, secoundCounter: state.secoundCounter - action.value };
    case 'reset':
      return initial;
    default:
      return state;
  }
};
function ReducerTwo() {
  const [count, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <br />
      <div>First Count={count.firstCounter}</div>

      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment-5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement-5
      </button>
      <div>
        <div>Secound Counter={count.secoundCounter}</div>
        <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
          Increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
          Decrement Counter 2
        </button>
      </div>

      <button onClick={() => dispatch({ type: 'reset' })}>Reset All</button>
    </div>
  );
}

export default ReducerTwo;
