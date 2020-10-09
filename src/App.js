import React from 'react';
import './App.css';

import HookCounter from './components/1_useState/01_useState/HookCounter';
import HookCounterTwo from './components/1_useState/02_useState/HookCounterTwo';
import HookCounterThree from './components/1_useState/03_useState/HookCounterThree';
import HookCounterFour from './components/1_useState/04_useState/HookCounterFour';

import UseEffectOne from './components/2_useEffect/05_useEffect/UseEffectOne';
import UseEffectTwo from './components/2_useEffect/06_useEffect/UseEffectTwo';
import UseEffectThree from './components/2_useEffect/06_useEffect/UseEffectThree';
import UseEffectFour from './components/2_useEffect/07_useEffect/UseEffectFour';

import DataFetching from './components/3_dataFetching/08_dataFetching/DataFetching';
import DataFetchingTwo from './components/3_dataFetching/09_dataFetching/DataFetchingTwo';

import UserContextA from './components/10_useContext/UserContextA';
import ReducerOne from './components/11_useReducer/ReducerOne';
import ReducerTwo from './components/12_useReducer/ReducerTwo';
import ReducerThree from './components/13_useReducer/ReducerThree';
import DataFetchingReducer from './components/14_useReducer/DataFetchingReducer';

import MemoOne from './components/15_useMemo/MemoOne';

import RefOne from './components/16_useRef/RefOne';
import RefTwo from './components/17_useRef/RefTwo';

import DocTitleOne from './components/18_customHooks/DocTitleOne';
import DocTitleTwo from './components/18_customHooks/DocTitleTwo';
import CustomHookOne from './components/19_customHooks/CustomHookOne';
import CustomHookTwo from './components/19_customHooks/CustomHookTwo';
import UserForm from './components/20_userInput/UserForm';

export const firstName = React.createContext();
export const lastName = React.createContext();

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

      {/* <DataFetching /> */}

      {/* <DataFetchingTwo /> */}

      {/* <firstName.Provider value="Sakil">
        <lastName.Provider value="Khan">
          <UserContextA />
        </lastName.Provider>
      </firstName.Provider> */}

      {/* <ReducerOne /> */}

      {/* <ReducerTwo /> */}

      {/* <ReducerThree /> */}

      {/* <DataFetchingReducer /> */}

      {/* <MemoOne /> */}

      {/* <RefOne /> */}

      {/* <RefTwo /> */}

      {/* <DocTitleOne />
      <DocTitleTwo /> */}

      {/* <CustomHookOne />
      <CustomHookTwo /> */}

      {/* <UserForm /> */}
    </div>
  );
}

export default App;
