import "./App.css";
import LotteryMachine from "./LotteryMachine";
import { digitSum } from "./helper";

function App() {

  // function to define winning condition & also we are passing this function as props to lower-hierarchy component (LotteryMachine)
  function winCondition(ticketArray) {
    return digitSum(ticketArray) >= 15;
  };

  return (
    <>
      <LotteryMachine digitSize={2} winCondition={winCondition} />
    </>
  );
}

export default App;
