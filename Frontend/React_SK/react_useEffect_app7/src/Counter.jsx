import { useState, useEffect } from "react";

function Counter() {
  let [countX, setCountX] = useState(0);
  let [countY, setCountY] = useState(0);

  function handleIncreaseCountX() {
    setCountX((currCount) => {
      currCount = currCount + 1;
      return currCount;
    });
    console.log(countX);
  };

  function handleIncreaseCountY() {
    setCountY((currCount) => {
      currCount = currCount + 1;
      return currCount;
    });
    console.log(countY);
  };

  // useEffect()
  useEffect(
    function sideEffect() {
        console.log("This is a side effect");
    },// This function invoke, when any change happens in any state varibale value and component render & re-render, includes first time render
    [countX] // dependencies - we pass particular state variable in array ,on which we want useEffect will apply when they re-render & render
    // e.g. here we want useEffect is only apply on countX
  );

/*

*  # 3 CASES

    1) SETUP ONLY
    - We didn't pass dependencies array

    2) SETUP WITH DEPENDENCIES ARRAY []
    - We pass array of state variable on which we want to apply useEffect() function

    3) SETUP WITH EMPTY ARRAY []
    - We pass empty array for 1 time apply useEffect while Rendering ,not on re-rendering

*/

  return (
    <div>
      <h2>Counter - X</h2>
      <p>Count = {countX}</p>
      <br />
      <button onClick={handleIncreaseCountX}>+1</button>
      <hr />
      <h2>Counter - Y</h2>
      <p>Count = {countY}</p>
      <br />
      <button onClick={handleIncreaseCountY}>+1</button>

    </div>
  );
}

export default Counter;
