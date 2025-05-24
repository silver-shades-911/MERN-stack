import { useState } from "react";
import Ticket from "./Ticket";
import { arrayDigitGenerator } from "./helper";
import Button from "./button";

export default function LotteryMachine({ digitSize = 2, winCondition }) {
  // Lottery Ticket
  let [lotteryNo, setLotteryNo] = useState(arrayDigitGenerator(digitSize));
  console.log("lotteryNo ->", lotteryNo);

  // result
  let [result, setResult] = useState("");

  // New Ticket Generation Logic
  function handleNewTicketGenerate() {
    setLotteryNo(arrayDigitGenerator(digitSize));
    setResult("");
  }

  // Lottery ticket Check Logic
  function handleLotteryTicketCheck() {
    // here we using winCondition function we pass as props from App component
    if (winCondition(lotteryNo)) {
      setResult("🎉 Congratulations! You Win the Lottery");
    } else {
      setResult("😢 Better Luck Next Time! You lost the Lottery, try again");
    }
  }

  return (
    <div style={{ height: "30rem", width: "40rem", border: "2px solid" }}>
      <h2>Lottery Machine</h2>
      <h4>Let's Start Game </h4>
      <br />
      <h4>{result}</h4>
      <br />
      <Ticket lotteryNo={lotteryNo} />
      <br />
      <Button
        actionCallback={handleNewTicketGenerate}
        btnName="Get New Ticket"
      />
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Button actionCallback={handleLotteryTicketCheck} btnName="Check" />
    </div>
  );
}

// Smart Component
// Propes -> digitSize, winningSum
// State ->  lotteryNo
// Events ->  handleNewTicketGenerate, handleLotteryTicketCheck

/*

* FUNCTIONS AS PROPS
? How we can pass functions as value ?
  - JS Functions are 1st Class Objects
  - This means they can be passed to a function as argument, returned from it & assigned to a variable (like normal value)
  - This is not possible in any programming language  
  - e.g. 1) winCondition 2) Button onClick callback

* TIP
  - Think of scalability, Normal user perspective to use & Changability e.g. conditions for win at outer level make easy to change  
*/
