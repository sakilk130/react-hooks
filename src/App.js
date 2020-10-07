import React from 'react';
import './App.css';
import HookCounter from './components/01_useState/HookCounter';
import HookCounterTwo from './components/02_useState/HookCounterTwo';
import HookCounterThree from './components/03_useState/HookCounterThree';
import HookCounterFour from './components/04_useState/HookCounterFour';
import UseEffectOne from './components/05_useEffect/UseEffectOne';
import UseEffectTwo from './components/06_useEffect/UseEffectTwo';
import UseEffectThree from './components/06_useEffect/UseEffectThree';
import UseEffectFour from './components/07_useEffect/UseEffectFour';
import DataFetching from './components/08_dataFetching/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}

      {/* <HookCounterTwo /> */}

      {/* <HookCounterThree /> */}

      {/* <HookCounterFour /> */}

      {/* <UseEffectOne /> */}

      {/* <UseEffectTwo /> */}

      {/* <UseEffectThree /> */}

      {/* <UseEffectFour /> */}

      <DataFetching />
    </div>
  );
}

export default App;
