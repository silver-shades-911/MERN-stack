import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //? Why we use useMemo() hook
  
  // take example without useMemo()

  // we are creating 30 million length array having objects {index, boolean} 
  // on 29 million index it have only true boolean value
 
  const[numbers, setNumbers] = useState(() =>
    new Array(10_000_000).fill(0).map(
    (_, index) => { // _ that underscore is use when we dont want to use element, other index is we can track index
      return {
        index: index,
        isMagicalNum: index === 9_000_000,
      };
    }
  )
  ); // make state variable bcz most of operations we do with state (as normal)

  //* Heavy computation task 
  // let magicalNum = numbers.find((element) => element.isMagicalNum === true);


  //! Issue : as we know react nature when any state in component chaneg whole page is reload 
  //! here thats happing , when count change which does not have any anything to do with our heavy computation task
  //! it re-render and do perform that task again , that consume resources and put pressure on servers 
  
  //* Solution  - use useMemo, this do memoization 

  //? Why use useMemo() this prevent re-rendering of that expensive task when non-related re-rendering happened

  //* our heavy computation task
  let magicalNum = useMemo(
    () => (numbers.find((element) => element.isMagicalNum === true)),
    [numbers] // dependency array, when numbers state change this task is re-compute again
  ); 

  // See we have to perform this task at once but when to  re-render and depend re-render on what can set
  // see difference in performance

  return (
    <>
      <div>
        <p>`Magical nUmber : ${magicalNum.index}`</p>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
