import React from 'react';
import './App.css';
import HookCounter from './components/01_useState/HookCounter';
import HookCounterTwo from './components/02_useState/HookCounterTwo';
import HookCounterThree from './components/03_useState/HookCounterThree';
function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}

      {/* <HookCounterTwo /> */}
      <HookCounterThree />
    </div>
  );
}

export default App;
