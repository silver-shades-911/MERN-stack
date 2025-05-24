import { useState } from "react";

export default function LudoBoard() {
  //* OBJECT WITH STATES

  let [moves, setMoves] = useState({ red: 0, blue: 0, yellow: 0, green: 0 }); // We pass object with different keys with initial values
  // Here, moves object is create with initial values we pass

  // Normal function passing new value to setMoves
  function updateBlueMovesNormal() {
    moves.blue += 1;
    console.log(`moves.blue = ${moves.blue}`);
    setMoves(moves);
  }

  /*
*  Issue with working Object
?    Components is not re-rendering ?
      - Try to run code with Normal function passing new value to setMoves(moves)
      - we update one key in moves object and pass that object to setMoves
        according to us moves object is updated ,so it should invoke setMoves
!     - But that not happed, component does not re-render & moves object is not able to invoke setMoves() function
      - setMoves() functions nature is when it detect change in value it invokes
*     - But change in key values of object, does not change object (means that instance of object is not change, JS treat them as old object ). This is Objects nature in JS 
      - For setMoves() value doesn't change, so it doesn't invoke (never detect chnage in value)
      - This is similar for array [] also , change in elements does not change array instance 
    
*  SOLUTION:
     - We create new instace of object with updated values
     - use ...spread operator       

*/

  //* Correct way to pass object in setState()

  // blue
  function updateBlueMoves() {
    console.log(`moves.blue = ${moves.blue}`);

    setMoves((currMoves) => {
      return {
        ...currMoves,
        blue: currMoves.blue + 1,
      };
    });
  }

  /*

?   How useState recognize currMoves is refer to latest state of moves object ?
    - In  let [moves, setMoves] = useState({ red: 0, blue: 0, yellow: 0, green: 0 }); Initialize statement React expect the value is passing to useState() is the latest 
      state of stateVariable (e.g. moves) 

    - The function inside setMoves receives the latest state (currMoves).
    - currMoves is guaranteed to be the most recent state of moves, even if multiple updates occur.
    - The function creates a new object, spreading currMoves and updating only blue.
    
*/

  // red
  function updateRedMoves() {
    console.log(`moves.red = ${moves.red}`);

    setMoves((currMoves) => {
      return {
        ...currMoves,
        red: currMoves.red + 1,
      };
    });
  }

  // yellow
  function updateYellowMoves() {
    console.log(`moves.yellow = ${moves.yellow}`);

    setMoves((currMoves) => {
      return {
        ...currMoves,
        yellow: currMoves.yellow + 1,
      };
    });
  }

  // green
  function updateGreenMoves() {
    console.log(`moves.green = ${moves.green}`);

    setMoves((currMoves) => {
      return {
        ...currMoves,
        green: currMoves.green + 1,
      };
    });
  }

  //*  ARRAY WITH STATES

  let [arr, setArr] = useState(["No moves"]);

  function addElementInArray() {
    console.log(`Array -> ${arr}`);
    setArr((currArr) => {
      return [...currArr, "Element"];
    });
  }

  return (
    <div>
      <div
        style={{
          height: "9rem",
          width: "10rem",
          border: "1px solid",
          marginTop: "1rem",
          backgroundColor: "red",
        }}
      >
        <p style={{ fontWeight: "500" }}>Red Moves = {moves.red}</p>
        <button onClick={updateRedMoves}>+1</button>
      </div>

      <div
        style={{
          height: "9rem",
          width: "10rem",
          border: "1px solid",
          marginTop: "1rem",
          backgroundColor: "blue",
        }}
      >
        <p style={{ fontWeight: "500" }}>Blue Moves = {moves.blue}</p>
        <button onClick={updateBlueMoves}>+1</button>
      </div>

      <div
        style={{
          height: "9rem",
          width: "10rem",
          border: "1px solid",
          marginTop: "1rem",
          backgroundColor: "yellow",
        }}
      >
        <p style={{ fontWeight: "500" }}>Yellow Moves = {moves.yellow}</p>
        <button onClick={updateYellowMoves}>+1</button>
      </div>

      <div
        style={{
          height: "9rem",
          width: "10rem",
          border: "1px solid",
          marginTop: "1rem",
          backgroundColor: "green",
        }}
      >
        <p style={{ fontWeight: "500" }}>Green Moves = {moves.green}</p>
        <button onClick={updateGreenMoves}>+1</button>
      </div>


      <div
        style={{
          height: "10rem",
          width: "90vw",
          border: "1px solid",
          marginTop: "1rem",
          backgroundColor: "whitesmoke",
        }}
      >
        <p style={{ fontWeight: "500" }}> Array = {arr}</p>
        <button onClick={addElementInArray}>Add Element</button>
      </div>
    </div>
  );
}
