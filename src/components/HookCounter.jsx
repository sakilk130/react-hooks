import React, { useState } from 'react';

function HookCounter() {
  const [count, update] = useState(0);
  return (
    <div>
      <button onClick={() => update(count + 1)}>Count-{count}</button>
    </div>
  );
}

export default HookCounter;
