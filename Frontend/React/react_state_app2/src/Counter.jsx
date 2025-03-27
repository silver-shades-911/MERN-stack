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

export default function Counter(){
    // let array = useState(0);
    // console.log(array); // return array with 2 indexes

    let [count, setCount] = useState(0);
    function increaseCount() {
      setCount(count+1);  // setCount is function in which we pass our new value, This trigger Re-rendering.
                          // But, this is not good way of passing our new value
      console.log(count);                     
    };


    return (
        <div>
           <p>Count = {count}</p>
           <button onClick={increaseCount}> Click Me </button>
        </div>
    );
};


/*
* One Abnormal behaviour 
  - observe  console.log(count);  &   <p>Count = {count}</p> statements, their values are different, console's count is lagging web-page's count by 1
    This is happing because Closure's


*/