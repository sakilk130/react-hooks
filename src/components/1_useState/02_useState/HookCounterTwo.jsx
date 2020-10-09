import React, { useState } from 'react';

function HookCounterTwo() {
  const start = 0;
  const [count, setCount] = useState(start);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h3>Count-({count})</h3>
      <button onClick={() => setCount(count + 1)}>Increment+1</button>
      <button onClick={() => setCount(count - 1)}>Decrement-1</button>
      {/* <button onClick={() => setCount(count + 5)}>Increment+5</button> */}
      <button onClick={incrementFive}>Increment+5</button>
      <button onClick={() => setCount(start)}>Reset</button>
    </div>
  );
}

export default HookCounterTwo;
