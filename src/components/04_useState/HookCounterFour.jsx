import React, { useState } from 'react';

function HookCounterFour() {
  const [items, setItem] = useState([]);
  const addItem = () => {
    setItem([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10 + 1),
      },
    ]);
  };
  return (
    <div>
      <h3>Add random number in array</h3>
      <button onClick={addItem}>Add Item</button>

      {items.map((item) => (
        <h4 key={item.id}>{item.value}</h4>
      ))}
    </div>
  );
}

export default HookCounterFour;
