import { useState } from "react";
import Ticket from "./Ticket";

export default function LotteryMachine() {

  // Lottery Ticket  
  let [lotteryNo, setLotteryNo ] = useState([0, 0, 0]);

  // result
  let [result, setResult] = useState("");

  // New Ticket Generation Logic
  function handleNewTicketGenerate () {
   let NewTicketNo = [];
   for(let i = 1; i <= 3; i++ ){
     let digit = Math.floor(Math.random()*10);
     console.log("digit ->", digit);
     NewTicketNo.push(digit);
   }
   setLotteryNo(NewTicketNo);
   setResult("");
  };


  // Lottery ticket Check Logic

  function handleLotteryTicketCheck () {
    let sum = 0;
    for(let digit of lotteryNo){
        sum += digit;
    };
    console.log("Sum of ticket digits ->", sum);
    
    if(sum == 15){
        setResult("🎉 Congratulations! You Win the Lottery");
    }else{
        setResult("😢 Better Luck Next Time! You lost the Lottery, try again");
    }
  };


  return (
    <div style={{ height: "30rem", width: "40rem", border: "2px solid"}}>
      <h2>Lottery Machine</h2>

      <h4>Let's Start Game </h4>
      <br />
      <h4>{result}</h4>
      <br />
      <Ticket lotteryNo={lotteryNo} />
      <br />
      <span>
        <button onClick={handleNewTicketGenerate}>Get New Ticket</button>
      </span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span>
        <button onClick={handleLotteryTicketCheck}>Check</button>
      </span>
      
    </div>
  );
}
