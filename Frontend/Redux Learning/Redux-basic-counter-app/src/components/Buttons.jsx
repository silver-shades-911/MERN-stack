//TODO 10: import useSelector & useDispatch hook
// We can read data from the store with useSelector, and dispatch actions using useDispatch.
import { useSelector, useDispatch } from "react-redux";

//TODO 11: import our reducer methods
import {
  increment,
  decrement,
  incementByAmount,
} from "../features/counter/counterSlice";

const Buttons = () => {
  //TODO 12: access our state variable / data store in store
  const counter = useSelector((state) => state.counter);
  // If have many state varibles then => e.g. state.time
  //If state variable is object or array they access it like it e.g. Array[0] , obj.key
  {
    console.log(counter);
  }

  //TODO 13: how to dispatch operation with data
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>

      <span>{counter.value}</span>

      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Buttons;
