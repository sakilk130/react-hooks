import React, { useState } from 'react';

function HookCounterThree() {
  const firstName = '';
  const lastName = '';
  const [name, setName] = useState({ firstName, lastName });

  return (
    <div>
      <h2>Input</h2>
      <input
        type="text"
        placeholder="Firstname"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Lastname"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>
        Firstname and Lastname: {name.firstName} {name.lastName}
      </h3>
    </div>
  );
}

export default HookCounterThree;
