import { useState } from "react";
import "./App.css";

function App() {
  let [time, setTime] = useState(0);
  let [timerSwitch, setTimerSwitch] = useState(false);
  let [intervalID, setIntervalID] = useState("");
  let [passedTimeBeforeStop, setPassedTimeBeforeStop] = useState(0);

  // Function to convert time ( number) --> string to format it
  function timeFormater(timeNum, length = 2) {
    return String(timeNum).padStart(length, "0");
  }

  function handleTimeStart(passedTime = 0) {
    if (timerSwitch) return;

    // First Point of reference
    let startPoint = performance.now() - passedTime; // we are shifing startPoint when we resume (we basically get that time's current time point and minus passed time , bascially going into past )
    console.log("startPoint ->",startPoint);
    console.log("performance.now() ->",performance.now());

    setTimerSwitch(true); // stopwatch is started

    // This fun calculating time pass from starting point time
    let watchTime = setInterval(() => {
      let currentPoint = performance.now();

      // calculating time pass
      let timeDiff = currentPoint - startPoint;
      setPassedTimeBeforeStop(timeDiff);
      return setTime(timeDiff);
    }, 10);

    setIntervalID(watchTime);
  }

  // This function is to stop / pause Timer
  function handleTimeStop() {
    clearInterval(intervalID); // pause timer
    setTimerSwitch(false); // make "false" == watch is stop
  }

  // This function is to Reset time
  function handleTimeReset() {
    clearInterval(intervalID);
    setTime(0); // set time to Zero
    setTimerSwitch(false);
    setPassedTimeBeforeStop(0);
  }

  // handleTimeResume
  function handletimeResume() {
    handleTimeStart(passedTimeBeforeStop);
  }


  return (
    <>
      <h1>⏱ Stopwatch</h1>
      <span style={{fontSize:"2rem"}}>{timeFormater(Math.floor(time / 60000))}:</span>
      <span style={{fontSize:"2rem"}}>{timeFormater(Math.floor((time % 60000) / 1000))}:</span>
      <span style={{fontSize:"2rem"}}>{timeFormater(Math.floor(time % 1000), 3)}</span>
      <br />
      <br />
      <br />

      {passedTimeBeforeStop === 0 && !timerSwitch ? (
        <span>
          <button type="button" onClick={() => handleTimeStart(0)}>
            Start
          </button>
        </span>
      ) : timerSwitch ? (
        <>
          <span>
            <button type="button" onClick={handleTimeStop}>
              Stop
            </button>
          </span>
          &nbsp; &nbsp; &nbsp;
          <span>
            <button type="button" onClick={handleTimeReset}>
              Reset
            </button>
          </span>
        </>
      ) : (
        <>
          <span>
            <button type="button" onClick={handletimeResume}>
              Resume
            </button>
          </span>
          &nbsp; &nbsp; &nbsp;
          <span>
            <button type="button" onClick={handleTimeReset}>
              Reset
            </button>
          </span>
        </>
      )}
    </>
  );
}

export default App;
