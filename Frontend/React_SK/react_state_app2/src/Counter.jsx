import { useState } from "react";

/* 
* Code without State

    export default function Counter(){
        let count = 0;  // state Variable with Initial value 0
        function increaseCount(){   // state change function | updater function
        count+= 1;
        console.log(count);
        };

        return (
            <div>
            <button onClick={increaseCount}> Click Me </button>
            <p>Count = {count}</p>
            </div>
        );
    };

*/

/* 
*   STATE IN REACT
    - Observe this code by running, we tackle a problem our  <p>Count = {count}</p> this statment is not updating although it is updating at Console

?   Why we need STATE in react ?
    - Beacuse when code is exceute all components are render on web page, but they are in state (means like freez in moment or instance).
      If after that anything change in component it does not update in web-page, for that we need to re-render page to change thier state

*   HOOKS
    - In React, hooks are special functions that let you use state and other React features in functional components without needing to write a class component. 
      Introduced in React 16.8, hooks allow developers to manage component logic more efficiently.


*   useState()
    - let [stateVariable, setStateVariable] = useState(initialValue) 
    - stateVarible = a variable which state we want to change
    - setStateVariable = a function which change state, start name with "set"   
*/

//*  Code with State

export default function Counter() {
  // let array = useState(0);
  // console.log(array); // return array with 2 indexes

  console.log("Component is Re-render from start to bottom");
  let [count, setCount] = useState(0); // This statement is only use for initialization, at Re-rendering React ignore this statement

  console.log(`Count = ${count}`);

  function increaseCount() {
    /*  
       setCount(count+1);   --> - setCount() is function in which we pass our new value, This trigger Re-rendering.
       setCount(count+1);         But, this is not good way of passing our new value,
                                - also here our value is not update x2 times , hey behave asyncronously
                                - Use this approch for static values e.g. setCount(25);

                                                   
        ? Good way is
            - pass callback
            - due to use of callbacks ,it behave like syncronously 
              now our value is increase x2 times
    */

    setCount((currVal) => {
      return currVal + 1;
    });
    setCount((currVal) => {
      return currVal + 1;
    });
    console.log(`Inner count / count after setCount() = ${count}`);
  }

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={increaseCount}> Click Me </button>
    </div>
  );
}

/*
*  One Abnormal behaviour 
    - observe  console.log(count);  &   <p>Count = {count}</p> statements, their values are different, console's count is lagging web-page's count by 1
      This is happing because Closure's

?  How Re-rendering work ?
    - We call to setCount(count+1) function ,it does not update count value immediately , it update when current rendering is finished and update in next Re-rending
      thats why, console.log(`Inner count / count after setCount() = ${count}`); it value is lagging by 1 

*   - How React Processes State Updates
        When setCount(count + 1) is called, React schedules a state update.
        However, state updates in React are asynchronous. The state does not update immediately inside the function where setCount() is called.
        After setCount(), the component re-renders, and only then does the count value update in the next render cycle.

*   - Step-by-Step Execution Flow

        User Clicks Button → React calls increaseCount().
        Inside increaseCount():
        setCount(count + 1) schedules a state update (but does not update immediately).
        Other synchronous code in increaseCount() runs with the old count value.
        The function finishes execution.
        React Notices State Change → It schedules a re-render.
*       Re-render Happens → React calls Counter() again:
        Now, count is updated with the new value.
        The entire component function runs from top to bottom.
        The UI updates to show the new count.
*/

/*   Callback passing in useState() at initialization

function init() {
  console.log("init exceuting");
  return Math.random();
}

useState(init); // we can pass callbacks for initial value


* Difference between 
    useState(init)  V/S  useState(init())  V/S  useState(() => init())

    ✅ useState(init) → Direct Initialization (Simple & Lightweight)
        - `init` is assigned immediately as the initial state value.
        - Best for primitive values (Number, String, Boolean, etc.).
        const [count, setCount] = useState(0); 


    ❌ useState(init()) → Immediate Function Execution (Avoid This)
        - `init()` runs immediately, even if React ignores the return value after the first render.
        - Not recommended for expensive calculations as it runs on every render.
        const [data, setData] = useState(fetchData()); // ❌ BAD: Unnecessary execution


    ✅ useState(() => init()) → Lazy Initialization (Best for Expensive Operations)
        - `init()` runs **only once**, on the first render.
        - Best for computationally expensive initializations or fetching data.
        const [expensiveData, setExpensiveData] = useState(() => fetchData()); // ✅ GOOD: Runs once

*/
