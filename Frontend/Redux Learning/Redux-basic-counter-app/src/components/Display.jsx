import { useSelector, useDispatch } from "react-redux"

// No need to import UseDispatch and reducer methods , because here we only read data
import { increment, decrement } from "../features/counter/counterSlice"

const Display = () => {

    // Reading data from store
    const counter = useSelector((state) => state.counter);
      {console.log(counter.value)};
  return (
    <h4 style={{padding: '10px', backgroundColor: 'gray'}}>
      This is counter value in Display = {counter.value}
    </h4>
  )
}

export default Display
